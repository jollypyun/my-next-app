import axios from "axios";
const login = (param) => {
    return axios.post("/auth/login", param)
}

export default login;