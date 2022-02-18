import axios from "axios";

export const getDataUser = async (token:string) => {
    try {
        const res = await axios.get(`https://www.googleapis.com/oauth2/v2/userinfo?alt=json&access_token=${token}`);

        return res;
    } catch (error) {
        
    }
} 