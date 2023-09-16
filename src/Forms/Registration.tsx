import React from 'react';
import {getFormValues, reduxForm} from "redux-form";
import style from './Login.module.scss'
import {useAppSelector} from "../Hooks/Hooks";
import CreateLoginField from "./CreateLoginField";

interface RegistrationFormProps {
   name:string,
   email:string,
   password:string,
   confirmPassword:string
   photo: any,
   socialNetwork: any
}

export type handleSubmitRegistrationType =  (email : string, name : string, password : string, confirmPassword : string) =>  void

interface RegistrationProps  {
   handleSubmit : handleSubmitRegistrationType
   switchFormLogin : () => void
}
let Registration = (props:RegistrationProps ) => {
   const {handleSubmit , switchFormLogin} = props

   const loginData : RegistrationFormProps = useAppSelector((state) => getFormValues('registration')(state))

   const name = loginData?.name
   const email = loginData?.email
   const password = loginData?.password
   const confirmPassword = loginData?.confirmPassword
   const registerHandler = (e:any) => {
      e.preventDefault()
      handleSubmit(email, name, password, confirmPassword)
   }

   return (
      <form onSubmit={registerHandler}>
         <div className={style.container}>
            <CreateLoginField title={'Name'} htmlFor={'name'} typeOfComponent={'text'}></CreateLoginField>
            <CreateLoginField title={'Email'} htmlFor={'email'} typeOfComponent={'email'}></CreateLoginField>
            <CreateLoginField title={'Password'} htmlFor={'password'} typeOfComponent={'password'}></CreateLoginField>
            <CreateLoginField title={'Confirm Password'} htmlFor={'confirmPassword'} typeOfComponent={'password'}></CreateLoginField>
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