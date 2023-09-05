import React from 'react';
import {Field, reduxForm} from "redux-form";
import {useSelector} from "react-redux";
import style from './Login.module.scss'

let Registration = ({handleSubmit, switchFormLogin}) => {

   const loginData = useSelector((state) => state.form)

   const name = loginData.registration?.values?.email
   const email = loginData.registration?.values?.email
   const password = loginData.registration?.values?.email
   const confirmPassword = loginData.registration?.values?.email

   const registerHandler = (e) => {
      e.preventDefault()
      handleSubmit(email, name, password, confirmPassword)
   }

   return (
      <form onSubmit={registerHandler}>
         <div className={style.container}>
            <div className={style.wrapperFields}>
               <label htmlFor="name">Name</label>
               <Field name="name" component="input" type="text"/>
            </div>
            <div className={style.wrapperFields}>
               <label htmlFor="Email">Email</label>
               <Field name="Email" component="input" type="email"/>
            </div>
            <div className={style.wrapperFields}>
               <label htmlFor="password">Password</label>
               <Field name="password" component="input" type="password"/>
            </div>
            <div className={style.wrapperFields}>
               <label htmlFor="ConfirmPassword">Confirm Password</label>
               <Field name="ConfirmPassword" component="input" type="password"/>
            </div>
            <button className={style.submitBtn} type="submit">Registration</button>
         </div>
         <div className={style.wrapperSwitchBtn}>
            <p>or</p>
            <button onClick={switchFormLogin}>Login</button>
         </div>
      </form>
   );
};
Registration = reduxForm({
   form: 'registration'
})(Registration)


export default Registration;