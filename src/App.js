import './App.module.scss';
import LoginPage from "./Pages/LoginPage/LoginPage";
import style from './App.module.scss'
import {Route, Routes} from "react-router-dom";
import ProtectRouters from "./Router/ProtectRouters/ProtectRouters";
import Layout from "./Router/Layout/Layout";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";

function App() {
   return (
      <>
         <Routes>
            <Route path={'/'} element={
               <ProtectRouters>
                  <Layout></Layout>
               </ProtectRouters>
            }></Route>
            <Route index  element={
               <ProtectRouters>
                  <ProfilePage></ProfilePage>
               </ProtectRouters>}>

            </Route>
            <Route path={'login'} element={<LoginPage></LoginPage>}></Route>
         </Routes>


      </>
   );
}

export default App;
