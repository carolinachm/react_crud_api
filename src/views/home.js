import React, {Component} from 'react'

import UsuarioService from '../app/service/usuarioService'
import LocalStorageService from '../app/service/localstoreageService'

class Home extends Component {

    state = {
       id: ''
    }
    constructor(){
        super();
        this.service = new UsuarioService();
    }

    componentDidMount(){
        
        const usuarioLogado = LocalStorageService.obterItem('_usuario_logado') 

        console.log(usuarioLogado)

        this.service.obterUsuarioPorId(usuarioLogado.id)
        .then( response => {
            this.setState({id: response.data})
        }).catch(error => {
            console.error(error.response)
        })

    }

   

    render() {
        return (
            <div className="jumbotron">
                <h1 className="display-3">Bem vindo!</h1>
                <hr className="my-4" />
                    <p>E essa é sua área administrativa, utilize um dos menus ou botões abaixo para navegar pelo sistema.</p>
                    <p className="lead">
                        <a className="btn btn-primary btn-lg" href="#/cadastro-usuario" role="button"><i className="fa fa-users"></i>  Cadastrar Usuário</a>
                    </p>
          </div>
        )
    }
}

export default Home