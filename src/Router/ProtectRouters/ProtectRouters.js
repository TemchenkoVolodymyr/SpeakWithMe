import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";


export const ProtectRouters = ({children}) => {
   const isAuth = useSelector((state) => state.isAuth)
console.log(isAuth)

   if(!isAuth) {
      return <Navigate to={'/login'}></Navigate>
   }else{
      return children
   }
}
export default ProtectRouters