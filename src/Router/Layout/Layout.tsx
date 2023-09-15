import style from './Layout.module.scss'
import NavPage from "../../Pages/NavPage/NavPage";
import React, {useEffect} from "react";
import {UserProfile} from "../../ApiRequests/AuthUser/AuthUser";
import {usersAC, usersActionType} from "../../Redux/Users/usersAC";
import Header from "../../components/Header/Header";
import {useAppDispatch, useAppSelector} from "../../Hooks/Hooks";
import {Outlet} from "react-router-dom";


export const Layout = () => {
    const currentUser = useAppSelector((state) => state.authUser)
    const dispatch = useAppDispatch()
    useEffect(() => {

        UserProfile.getUsers().then(res => {
            dispatch<usersActionType>(usersAC(res.data.data.result))
        })
    }, [currentUser])


    return (
        <>
            <div className={style.container}>
                <header>
                    <Header/>
                </header>
                <div className={style.wrapperMainContent}>
                    <nav>
                        <NavPage></NavPage>
                    </nav>
                    <main>
                        <Outlet></Outlet>
                    </main>
                </div>
            </div>
        </>
    )
}
export default Layout