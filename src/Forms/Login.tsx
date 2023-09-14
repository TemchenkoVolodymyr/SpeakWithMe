import React from 'react';
import {Field, reduxForm} from "redux-form";
import style from './Login.module.scss'
import {useSelector} from "react-redux";
import {useAppSelector} from "../Hooks/Hooks";
import {getFormValues } from "redux-form";
type loginDataType = {
    email:string,password:string
}
let Login  = (props : any) => {
    const {handleSubmit,switchFormRegister} = props

   const loginData : loginDataType  = useAppSelector((state) => getFormValues ("login")(state));

   const email = loginData?.email
   const password = loginData?.password


   const loginHandle = (e : any) => {
      e.preventDefault()
      handleSubmit(email,password)
   }
   return (
      <form onSubmit={loginHandle}>
         <div className={style.container}>
         <div className={style.wrapperFields}>
            <label htmlFor="email">Email</label>
            <Field name="email" component="input" type="email" />
         </div>
         <div className={style.wrapperFields}>
            <label htmlFor="password">Password</label>
            <Field name="password" component="input" type="password"/>
         </div>
         <button className={style.submitBtn} type="submit">Login</button>
         </div>
         <div className={style.wrapperSwitchBtn}>
            <p>or</p>
            <button onClick={switchFormRegister}>Registration</button>
         </div>
      </form>
   );
};

Login = reduxForm({
   form: 'login'
})(Login)

export default Login;