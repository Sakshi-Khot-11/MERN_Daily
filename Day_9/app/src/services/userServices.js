import axios from 'axios';
export async function loginUser(email,password){
    const URL="http://localhost:4000/user/login"
    const body={email,password}
    const res= await axios.post(URL,body)
    return res.data

}
export async function registerUser(email,password,role) {
    const URL="http://localhost:4000/user/register"
    const body={email,password,role}
    const res=await axios.post(URL,body)
    return res.data
    
}