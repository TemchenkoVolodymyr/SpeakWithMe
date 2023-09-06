import {Outlet} from "react-router-dom";
import style from './Layout.module.scss'
import {useSelector} from "react-redux";
import NavPage from "../../Pages/NavPage/NavPage";
import ProfilePage from "../../Pages/ProfilePage/ProfilePage";


export const Layout = () => {


   return (
      <>
         <div className={style.container}>
            <header>
               Header SpeakWithMe
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