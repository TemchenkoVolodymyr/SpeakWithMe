import {Outlet} from "react-router-dom";
import style from './Layout.module.scss'


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