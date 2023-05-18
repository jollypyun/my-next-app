import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useReCaptcha } from "next-recaptcha-v3";
import { useEffect } from "react";
import { useCallback } from "react";
import { useForm } from "react-hook-form";



const Login = () => {
    const {handleSubmit, register, reset} = useForm()
    const { executeRecaptcha } = useReCaptcha();

    const onSubmit = useCallback(async(data) => {
        const token = await executeRecaptcha('6LczQxcmAAAAAAgPSNK1ooDonlJ-S0P_e8_Y9Ljh');
        const datas = {
            token: token,
            userId: data.userId,
            password: data.password
        }

        if(data.userId === "" || data.password === "") {
            alert(`입력 바랍니다.`)
            return ;
        }
        axios.post("http://localhost:9010/auth/login", datas, {
            withCredentials:true
        }).then((res) => {
            console.log(res);
            if(res.data.code === '2000') {
                console.log('login success');
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

    // const submitData = (data, gReCaptchaToken) => {
        
    // }

    useEffect(() => {
        
    }, [])

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
                <button type="submit" >로그인</button>
            </form>
        </>
    )
}

export default Login;