import LoginForm from "../../Forms/LoginForm";
import style from './LoginPage.module.scss'
import {useState} from "react";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {createUserThunkCreator, loginUserThunkCreator} from "../../Redux/Authorization/authorizationThunkCreator";


export const LoginPage = () => {
   const [switchForm, setSwitchForm] = useState('login')
   const dispatch = useDispatch()

   const navigate = useNavigate()
   const createNewUser = (email, name, password, confirmPassword) => {
      dispatch(createUserThunkCreator(email,name,password,confirmPassword,navigate))
   }

   const login = (email, password) => {
      dispatch(loginUserThunkCreator(email,password,navigate))
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