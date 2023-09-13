import {Outlet} from "react-router-dom";
import style from './Layout.module.scss'
import {useDispatch, useSelector} from "react-redux";
import NavPage from "../../Pages/NavPage/NavPage";
import {useEffect} from "react";
import {UserProfile} from "../../ApiRequests/AuthUser/AuthUser";
import {usersAC} from "../../Redux/Users/usersAC.tsx";
import Header from "../../components/Header/Header";


export const Layout = () => {
   const currentUser = useSelector((state) => state.authUser)
   const dispatch = useDispatch()
   useEffect(() => {

      UserProfile.getUsers().then(res => {
         dispatch(usersAC(res.data.data.result))
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
                  <Outlet>
                  </Outlet>
               </main>
            </div>
         </div>
      </>
   )
}
export default Layout