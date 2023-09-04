import {useState} from "react";
import {loginRequest} from "../ApiRequests/Login/Login";


export const LoginPage = () => {

   const [email, setEmail] = useState("")
   const [name, setName] = useState("")
   const [password, setPassword] = useState("")
   const [confirmPassword, setConfirmPassword] = useState("")

   const createNewUser = (e) => {
      e.preventDefault()

      loginRequest.createUser(email,name,password,confirmPassword).then(res => {
         console.log(res)
         if(res.status === 200) {
            setEmail("")
            setName("")
            setPassword("")
            setConfirmPassword("")
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