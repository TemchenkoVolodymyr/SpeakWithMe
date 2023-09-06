import './App.module.scss';
import LoginPage from "./Pages/LoginPage/LoginPage";
import style from './App.module.scss'
import {Route, Routes} from "react-router-dom";
import ProtectRouters from "./Router/ProtectRouters/ProtectRouters";
import Layout from "./Router/Layout/Layout";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import Friends from "./components/Friends/Friends";

function App() {
   return (
      <>
         <Routes>
            <Route path={'/'} element={
               <ProtectRouters>
                  <Layout></Layout>
               </ProtectRouters>
            }>
               <Route path={'friends'} element={<Friends/>}></Route>
               <Route path={'profile'} element={<ProfilePage/>}></Route>
            </Route>
            <Route path={'login'} element={<LoginPage></LoginPage>}></Route>
         </Routes>


      </>
   );
}


export default App;
