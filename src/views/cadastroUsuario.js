import React, { Component } from 'react'
import InputMask from 'react-input-mask'
import Card from '../components/card'
import FormGroup from '../components/form-group'

import {withRouter} from 'react-router-dom'

import UsuarioService from '../app/service/usuarioService'
import {mensagemErro, messagemSucesso} from '../components/toastr'

class CadastroUsuario extends Component {

    state = {
        nome: '',
        senha: '',
        cpf: '',
        telefone: '',
        email: '',
        endereco: {
            cep: '',
            logradouro: '',
            numero: '',
            complemento: '',
            bairro: '',
            cidade: ''
        },
    }

    constructor(){
        super()
        this.service = new UsuarioService()
    }

    validar = () => {

        const msgs = []
        if(!this.state.nome){
            msgs.push('O campo Nome é obrigatório')
        }
        if(!this.state.cpf){
            msgs.push('O campo CPF é obrigatório')
        }
        if(!this.state.email){
            msgs.push('O campo Email é obrigatório')
        }else if(!this.state.email.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]/)){
            msgs.push('Informe email valido')
        }
        if(!this.state.senha){
            msgs.push('Digite a senha')
        }
      

        return msgs;

    }

    salvar = () => {
        const msgs = this.validar();

        if(msgs && msgs.length > 0){
            msgs.forEach( (msg, index) => {
                mensagemErro(msg)
            })
            return false
        }

        const usuario = {
            nome: this.state.nome,
            senha: this.state.senha,
            cpf: this.state.cpf,
            telefone: this.state.telefone,
            email: this.state.email,
            endereco: {
                cep: this.state.cep,
                logradouro: this.state.endereco.logradouro,
                numero: this.state.endereco.numero,
                complemento: this.state.endereco.complemento,
                bairro: this.state.endereco.bairro,
                cidade: this.state.endereco.cidade
            },

        }
       this.service.salvar(usuario)
       .then( response => {
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
                                    <InputMask mask="(99)9999-9999" value={this.state.telefone} onChange={e => this.setState({ telefone: e.target.value })} className="form-control" id="exampleInputTelefone" aria-describedby="telefoneHelp" maskPlaceholder="(99)99999-9999"/>
                                </FormGroup>
                                <FormGroup label="Email: *" htmlFor="inputEmail">
                                    <input type="email" value={this.state.email} onChange={e => this.setState({ email: e.target.value })} className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Digite o Email" />
                                </FormGroup>
                            </fieldset>

                            <fieldset>
                                <legend>Endereço</legend>
                                <div className="input-group mb-3">
                                    <FormGroup label="CEP: *" htmlFor="inputCEP">
                                        <input type="cep" value={this.state.cep} onChange={e => this.setState({ cep: e.target.value })} className="form-control" id="exampleInputCEP" aria-describedby="cepHelp" placeholder="Digite o CEP" />
                                        <button onClick={this.buscar} type="button" className="btn btn-info">Buscar</button>
                                    </FormGroup>
                                </div>

                                <FormGroup label="Logradouro: *" htmlFor="inputLogradouro">
                                    <input type="logradouro" value={this.state.logradouro} onChange={e => this.setState({ logradouro: e.target.value })} className="form-control" id="exampleInputLogradouro" aria-describedby="logradouroHelp" placeholder="Digite o Logradouro" />
                                </FormGroup>

                                <FormGroup label="Numero: *" htmlFor="inputNumero">
                                    <input type="numero" value={this.state.numero} onChange={e => this.setState({ numero: e.target.value })} className="form-control" id="exampleInputNumero" aria-describedby="NumeroHelp" placeholder="Digite o Numero" />
                                </FormGroup>
                                <FormGroup label="Complemento: *" htmlFor="inputComplemento">
                                    <input type="complemento" value={this.state.complemento} onChange={e => this.setState({ nome: e.target.value })} className="form-control" id="exampleInputComplemento" aria-describedby="ComplementoHelp" placeholder="Digite o Complemento" />
                                </FormGroup>
                                <FormGroup label="Bairro: *" htmlFor="inputBairro">
                                    <input type="bairro" value={this.state.bairro} onChange={e => this.setState({ bairro: e.target.value })} className="form-control" id="exampleInputBairro" aria-describedby="BairroHelp" placeholder="Digite o Bairro" />
                                </FormGroup>
                                <FormGroup label="Cidade: *" htmlFor="inputCidade">
                                    <input type="cidade" value={this.state.cidade} onChange={e => this.setState({ cidade: e.target.value })} className="form-control" id="exampleInputCidade" aria-describedby="CidadeHelp" placeholder="Digite o Cidade" />
                                </FormGroup>

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