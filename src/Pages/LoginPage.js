import {useState} from "react";
import axios from "axios";


export const LoginPage = () => {

   const [email, setEmail] = useState("")
   const [name, setName] = useState("")
   const [password, setPassword] = useState("")
   const [confirmPassword, setConfirmPassword] = useState("")

   const createNewUser = (e) => {
      e.preventDefault()
      return axios.post('http://localhost:3001/users', {
         email,
         name,
         password,
         confirmPassword,
         photo: null,
         socialNetwork: null
      },{
         headers: {
            "Content-Type": "application/json"
         }
      })
   }

   return (
      <>
         <form>
            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder={'email'}/>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder={'name'}/>
            <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder={'password'}/>
            <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                   placeholder={'confirm password'}/>

            <button onClick={createNewUser}>create User</button>
         </form>
      </>
   )
}
export default LoginPage