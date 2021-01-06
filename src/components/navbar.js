import React, { Component } from 'react'
import NavbarItem from './navbarItem'

import AuthService from '../app/service/authService'

const delogar = () => {
  AuthService.removerUsuarioAutenticado()
}
class Navbar extends Component{
    render(){
        return(
            <div className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary" >
            <div className="container">
              <a href="https://bootswatch.com/" className="navbar-brand">Cadastro de Usuário</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav">
                  <NavbarItem href="#/home" label="Home" />
                  <NavbarItem href="#/cadastro-usuario" label="Usuários" />
                  <NavbarItem onClick={delogar} href="#/login" label="Sair" />
              
               
              </ul>
      
              </div>
            </div>
          </div>
        )
    }

}

export default Navbar