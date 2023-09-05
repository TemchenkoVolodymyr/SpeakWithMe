import {loginRequest} from "../ApiRequests/Login/Login";
import LoginForm from "../Forms/LoginForm";
import style from './LoginPage.module.scss'
import {useState} from "react";


export const LoginPage = () => {
   const [switchForm, setSwitchForm] = useState('login')
   const createNewUser = (email, name, password, confirmPassword) => {

      loginRequest.createUser(email, name, password, confirmPassword).then(res => {
         if (res.status === 200) {
         }
      })
   }

   const login = (email, password) => {
      loginRequest.login(email, password)
   }

   const switchLoginFormHandler = () => {
      setSwitchForm('login')
   }
   const switchRegisterFormHandler = () => {
      setSwitchForm('registration')
   }

   return (
      <>
         <div className={style.container}>
            {switchForm === 'login' ?
               <LoginForm switchFormRegister={switchRegisterFormHandler} typeOfForm={'login'}
                          handleSubmit={login}></LoginForm>
               :
               <LoginForm switchFormLogin={switchLoginFormHandler} handleSubmit={createNewUser}></LoginForm>}
         </div>
      </>
   )
}
export default LoginPage