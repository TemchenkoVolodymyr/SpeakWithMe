import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";


export const ProtectRouters = ({children}) => {
   const isAuthUser = useSelector((state) => state.authUser)


   if(!isAuthUser) {
      return <Navigate to={'/login'}></Navigate>
   }else{
      return children
   }
}
export default ProtectRouters