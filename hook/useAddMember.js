import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const addMember = async(data) => {
    const res = await axios.post("http://localhost:9010/auth/join", data, {
        withCredentials: true
    })
    return res
}

const useAddMember = () => {
    return useMutation(addMember,  {
        onSuccess: (res) => {
            console.log("Success");
        },
        onError: (error, data) => {
            console.log("Error!!")
        }
    })
} 

export default useAddMember;