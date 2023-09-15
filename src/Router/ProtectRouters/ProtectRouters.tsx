import {Navigate} from "react-router-dom";
import {useAppSelector} from "../../Hooks/Hooks";


export const ProtectRouters = (props :any) => {
   const {children} = props
   const isAuth = useAppSelector((state) => state.isAuth)


   if(!isAuth) {
      return <Navigate to={'/login'}></Navigate>
   }else{
      return children
   }
}
export default ProtectRouters