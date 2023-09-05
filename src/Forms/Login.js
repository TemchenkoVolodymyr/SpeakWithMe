import React from 'react';
import {Field, reduxForm} from "redux-form";
import style from './Login.module.scss'
import {useSelector} from "react-redux";

let Login = ({handleSubmit,switchFormRegister}) => {

   const loginData = useSelector((state) => state.form)

   const email = loginData.login?.values?.email
   const password = loginData.login?.values?.password

   const loginHandle = (e) => {
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