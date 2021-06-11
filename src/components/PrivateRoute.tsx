import React from "react";
import { Route, Redirect } from "react-router-dom";
import studentService from "../services/student";

const PrivateRoute: React.FC<{
    component: React.FC;
    path: string;
    exact: boolean;
}> = (props) => {
    //condicional para ver se ta logado
    const estaLogado = localStorage.getItem('isLoggedIn') == "S";
 
    return estaLogado ? (<Route path={props.path} exact={props.exact} component={props.component} />) :
        (<Redirect to="/login" />);
};
export default PrivateRoute;