//  sử dụng api 
import {http} from "./config"

export const authService = {
    signUp: (data) => {
        // tiến hành thêm phần còn thiếu của api ở config
        return http.post("/auth/signup", data);
    },
    signIn: (data) => {
        return http.post("/auth/signin", data); 
    },
}