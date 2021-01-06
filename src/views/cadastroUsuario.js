import React, { Component } from 'react'

import InputMask from 'react-input-mask'
import Card from '../components/card'
import FormGroup from '../components/form-group'

import { withRouter } from 'react-router-dom'

import UsuarioService from '../app/service/usuarioService'
import { mensagemErro, messagemSucesso } from '../components/toastr'

import BuscaCep from '../components/buscacep'



class CadastroUsuario extends Component {

    state = {
        nome: '',
        senha: '',
        cpf: '',
        telefone: '',
        email: ''
        
    }
  
    constructor() {
        super()
        this.service = new UsuarioService()
    }

    validar = () => {

        const msgs = []
        if (!this.state.nome) {
            msgs.push('O campo Nome é obrigatório')
        }
        if (!this.state.cpf) {
            msgs.push('O campo CPF é obrigatório')
        }
        if (!this.state.email) {
            msgs.push('O campo Email é obrigatório')
        } else if (!this.state.email.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]/)) {
            msgs.push('Informe email valido')
        }
        if (!this.state.senha) {
            msgs.push('Digite a senha')
        }


        return msgs;

    }


    salvar = () => {
        const msgs = this.validar();

        if (msgs && msgs.length > 0) {
            msgs.forEach((msg, index) => {
                mensagemErro(msg)
            })
            return false
        }

        const usuario = {
            nome: this.state.nome,
            senha: this.state.senha,
            cpf: this.state.cpf,
            telefone: this.state.telefone,
            email: this.state.email
           

        }
        this.service.salvar(usuario)
            .then(response => {
                messagemSucesso('Usuário cadastrado com sucesso!')
                this.props.history.push('/login')
            }).catch(erro => {
                mensagemErro(erro.response.data)
            })
    }

    cancelar = () => {
        this.props.history.push('/login')
    }

    render() {
        return (
            <Card title="Cadastro de Usuário">


                <div className="row">
                    <div className="col-lg-6">
                        <div className="bs-component">
                            <fieldset>
                                <FormGroup label="Nome: *" htmlFor="inputNome">
                                    <input type="nome" value={this.state.nome} onChange={e => this.setState({ nome: e.target.value })} className="form-control" id="exampleInputNome1" aria-describedby="nomeHelp" placeholder="Digite o Nome" />
                                </FormGroup>
                                <FormGroup label="Senha: *" htmlFor="inputSenha">
                                    <input type="password" value={this.state.senha} onChange={e => this.setState({ senha: e.target.value })} className="form-control" id="exampleInputSenha" aria-describedby="senhaHelp" placeholder="Digite o Senha" />
                                </FormGroup>
                                <FormGroup label="CPF: *" htmlFor="inputCPF">
                                    <InputMask mask="999.999.999-99" value={this.state.cpf} onChange={e => this.setState({ cpf: e.target.value })} className="form-control" id="exampleInputCPF" aria-describedby="cpfHelp" maskPlaceholder="999.999.999-99" />
                                </FormGroup>
                                <FormGroup label="Telefone: *" htmlFor="inputTelefone">
                                    <InputMask mask="(99)9999-9999" value={this.state.telefone} onChange={e => this.setState({ telefone: e.target.value })} className="form-control" id="exampleInputTelefone" aria-describedby="telefoneHelp" maskPlaceholder="(99)99999-9999" />
                                </FormGroup>
                                <FormGroup label="Email: *" htmlFor="inputEmail">
                                    <input type="email" value={this.state.email} onChange={e => this.setState({ email: e.target.value })} className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Digite o Email" />
                                </FormGroup>
                            </fieldset>

                            <fieldset>
                                <legend>Endereço</legend>
                                <div>
                                   <BuscaCep />
                                   </div>

                                   <button onClick={this.salvar} type="button" className="btn btn-success">Salvar</button>
                                    <button onClick={this.cancelar} type="button" className="btn btn-danger">Cancelar</button>

                            </fieldset>
                        </div>

                    </div>
                </div>


            </Card>
        )
    }
}
export default withRouter(CadastroUsuario)