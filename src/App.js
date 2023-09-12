import './App.module.scss';
import LoginPage from "./Pages/LoginPage/LoginPage";
import style from './App.module.scss'
import {Route, Routes} from "react-router-dom";
import ProtectRouters from "./Router/ProtectRouters/ProtectRouters";
import Layout from "./Router/Layout/Layout";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import Friends from "./components/Friends/Friends";
import DialogsPage from "./Pages/DialogsPage/DialogsPage";
import Dialog from "./Pages/DialogsPage/Dialog/Dialog";

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
               <Route path={'profile/:idUserProfile?'} element={<ProfilePage/>}></Route>
               <Route path={'messages'} element={<DialogsPage/>}></Route>
               <Route path={'dialog/:dialogId'} element={<Dialog/>}></Route>
            </Route>
            <Route path={'login'} element={<LoginPage></LoginPage>}></Route>
         </Routes>


      </>
   );
}


export default App;
