import React from 'react';
import Login, {handleSubmitLoginType} from "./Login";
import Registration, {handleSubmitRegistrationType} from "./Registration";


const LoginForm = (props : any) => {

   const {handleSubmit, typeOfForm, switchFormLogin, switchFormRegister} = props

   return (typeOfForm === 'login'
         ?
         <Login switchFormRegister={switchFormRegister} handleSubmit={handleSubmit}></Login>
         :
         <Registration switchFormLogin={switchFormLogin} handleSubmit={handleSubmit}></Registration>
   );
}


export default LoginForm;