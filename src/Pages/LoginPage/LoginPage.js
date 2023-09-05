import {loginRequest} from "../../ApiRequests/Login/Login";
import LoginForm from "../../Forms/LoginForm";
import style from './LoginPage.module.scss'
import {useState} from "react";
import {authorizationAC} from "../../Redux/Authorization/authorizationAC";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";


export const LoginPage = () => {
   const [switchForm, setSwitchForm] = useState('login')
   const dispatch = useDispatch()

   const navigate = useNavigate()
   const createNewUser = (email, name, password, confirmPassword) => {
      loginRequest.createUser(email, name, password, confirmPassword).then(res => {
         if (res.status === 200) {
            dispatch(authorizationAC(res.data.data.user))
            localStorage.setItem('token', JSON.stringify(res.data.token))
            navigate('/')
         }
      })
   }

   const login = (email, password) => {
      loginRequest.login(email, password).then(res => {
            if (res.status === 200) {

               dispatch(authorizationAC(res.data.data.user))
               localStorage.setItem('token', JSON.stringify(res.data.token))
               navigate('/')
            }
         }
      )
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