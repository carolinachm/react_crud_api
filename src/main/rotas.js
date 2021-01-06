import React, { Component } from 'react'

import { Route, Switch, HashRouter, Redirect} from 'react-router-dom'

import Home from '../views/home'

import Login from '../views/login'
import CadastroUsuario from '../views/cadastroUsuario'
import AuthService from '../app/service/authService'



function RotaAutenticada({ component: Component, ...props }) {
    return (
        <Route {...props} render={(componentProps) => {
            if(AuthService.isUsuarioAutenticado()){
                return(
                    <Component {...componentProps} />
                )
            }else{
                return(
                    <Redirect to={{pathname : '/login', state: {from : componentProps.location}}}/>
                )
            }
        }} />
    )
        
}

class Rotas extends Component {

    render() {
        return (
            <HashRouter>
                <Switch>
                    <RotaAutenticada path="/home" component={Home} />

                    <Route path="/login" component={Login} />
                    <Route path="/cadastro-usuario" component={CadastroUsuario} />
                </Switch>
            </HashRouter>
        )
    }
}
export default Rotas
