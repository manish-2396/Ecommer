import Signin from "./Signin";


function PrivateRoute({children}) {
    // QpwL5tke4Pnpja7X4

    
    let {isAuth} = JSON.parse(localStorage.getItem("user")) || {isAuth : false};

    if(isAuth){
        return children;
    }

    return <Signin />



}

export default PrivateRoute;