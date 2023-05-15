import { useMutation } from "@tanstack/react-query"
import { useForm } from "react-hook-form"


const Join = () => {
    const regId = /^(?=.*?[a-z])(?=.*?[0-9]).{6,20}$/g
    const regPw = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/g
    const regNickname = /^[a-zA-Z0-9]{2,20}$/g
    const regName = /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{2,10}$/g
    
    const {handleSubmit, register} = useForm();

    const {mutate} = useMutation();

    const onSubmit = (data) => {
        if(!regId.test(data.id) || !regPw.test(data.pw) || !regNickname.test(data.nickname) || !regName.test(data.name)) {
            alert(`형식에 안 맞는 입력이 존재한다.`)
            return
        }

        const sendData = {
            userId: data.id,
            password: data.pw,
            nickname: data.nickname,
            name: data.name
        } 


    }

    const onError = (error) => {
        alert(`Error : ` + error);
    }
    
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit, onError)}>
                <div>
                    <input type="text" placeholder="ID" 
                        {...register("id")} />
                    <span style={{color: 'red', fontSize: '9px'}}> * 아이디는 영소문자와 숫자로 이루어진 6~20자 글자여야 합니다.</span>
                </div>
                <div>
                    <input type="text" placeholder="PW" 
                        {...register("pw")} />
                    <span style={{color: 'red', fontSize: '9px'}}> * 비밀번호는 영소문자, 영대문자, 숫자, 특수문자로 이루어진 8~20자 글자여야 합니다.</span>
                </div>
                <div>
                    <input type="text" placeholder="nickname" 
                        {...register("nickname")} />
                    <span style={{color: 'red', fontSize: '9px'}}> * 닉네임은 영소문자, 영대문자, 숫자로 이루어진 2~20자 글자여야 합니다.</span>
                </div>
                <div>
                    <input type="text" placeholder="name" 
                        {...register("name")} />
                    <span style={{color: 'red', fontSize: '9px'}}> * 한글 이름 입력</span>
                </div>
                <button type="submit">등록</button>
            </form>
        </>
    )
}


export default Join