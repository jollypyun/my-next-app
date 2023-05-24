import { Button } from "@mui/material";
import axios from "axios";
import { useReCaptcha } from "next-recaptcha-v3";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { useForm } from "react-hook-form";



const Login = () => {
    const {handleSubmit, register, reset} = useForm()
    const {executeRecaptcha} = useReCaptcha()
    const router = useRouter()

    const onSubmit = useCallback(async (data) => {
        const token = await executeRecaptcha('login');
        const datas = {
            token: token,
            userId: data.userId,
            password: data.password
        }

        if(data.userId === "" || data.password === "") {
            alert(`입력 바랍니다.`)
            return ;
        }
        axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/auth/login`, datas, {
            withCredentials:true
        }).then((res) => {
            console.log(res);
            if(res.data.code === '2000') {
                console.log('login success');
                router.push("/")
            } else {
                console.log('login error : ' + res.data.message);
            }
        }).catch((error) => {
            console.log('login error : ' + error);
        })
        reset()
    }, [reset, executeRecaptcha])

    const onError = (error) => {
        console.log(error);
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit, onError)}>
                <div>
                    <input type="text"
                        placeholder="id"
                        {...register("userId")} />
                </div>
                <div>
                    <input type="password"
                        placeholder="pw"
                        {...register("password")} />
                </div>
                <button type="submit" >login</button>
            </form>            
            <Link href={`${process.env.NEXT_PUBLIC_SERVER_URL}/auth/google/code/google`}>구글 로그인</Link>
        </>
    )
}

export default Login;