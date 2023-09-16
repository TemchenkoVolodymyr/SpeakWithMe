import React from 'react';
import {reduxForm} from "redux-form";
import style from './Login.module.scss'
import {useAppSelector} from "../Hooks/Hooks";
import {getFormValues} from "redux-form";
import CreateLoginField from "./CreateLoginField";

type loginDataType = {
    email: string, password: string
}

export type handleSubmitLoginType = (email:string,password:string) => void
type LoginPropsType = {
    handleSubmit: handleSubmitLoginType,
    switchFormRegister: () => void
}
let Login = (props: LoginPropsType) => {
    const {handleSubmit, switchFormRegister} = props


    const loginData: loginDataType = useAppSelector((state) => getFormValues("login")(state));

    const email = loginData?.email
    const password = loginData?.password


    const loginHandle = (e: any) => {
        e.preventDefault()
        handleSubmit(email, password)
    }
    return (
        <form onSubmit={loginHandle}>
            <div className={style.container}>
                <CreateLoginField title={'Email'} htmlFor={'email'} typeOfComponent={'email'}></CreateLoginField>
                <CreateLoginField title={'Password'} htmlFor={'password'}
                                  typeOfComponent={'password'}></CreateLoginField>
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