import React from 'react';
import style from "./Login.module.scss";
import {Field} from "redux-form";

interface createLoginPropsType {
    title:string
    htmlFor:string
    typeOfComponent:string
}
const CreateLoginField = (props : createLoginPropsType) => {
    const {title, htmlFor, typeOfComponent} = props
    return (
        <div className={style.wrapperFields}>
            <label htmlFor={htmlFor}>{title}</label>
            <Field name={htmlFor} component="input" type={typeOfComponent} />
        </div>
    );
};

export default CreateLoginField;