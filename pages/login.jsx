import { useCallback } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useForm } from "react-hook-form";


const Login = () => {
    const {handleSubmit, register} = useForm()
    const { executeRecaptcha } = useGoogleReCaptcha();

    const onSubmit = useCallback((data) => {
        if(!executeRecaptcha) {
            alert(`당신 로봇이지?`)
            return ;
        }
        executeRecaptcha().then((gReCaptchaToken) => {
            alert("인간이네")
            submitData(data, gReCaptchaToken)
        })
    }, [executeRecaptcha])

    const onError = (error) => {

    }

    const submitData = (data, gReCaptchaToken) => {
        
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit, onError)}>
                <div>
                    <input type="text"
                        placeholder="id"
                        {...register("id")} />
                </div>
                <div>
                    <input type="password"
                        placeholder="pw"
                        {...register("pw")} />
                </div>
            </form>
        </>
    )
}

export default Login;