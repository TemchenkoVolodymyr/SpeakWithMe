import {Outlet} from "react-router-dom";
import style from './Layout.module.scss'
import {useSelector} from "react-redux";


export const Layout = () => {


   return(
      <>
         <div className={style.container}>
            <header>

            </header>
            <nav>

            </nav>
            <main>
               <Outlet>
               </Outlet>
            </main>

         </div>
      </>
   )
}
export default Layout