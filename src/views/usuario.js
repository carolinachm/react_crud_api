import React, { Component } from 'react'
import Card from '../components/card'
import FormGroup from '../components/form-group'

class Usuario extends Component {

    state = {
        nome: '',
        senha: '',
        cpf: '',
        telefone: '',
        email: '',
        endereco: {
            logradouro: '',
            numero: '',
            complemento:'',
            bairro:'',
            cidade:''
        },
    }
    salvar = () =>{
        console.log(this.state.nome)
        console.log(this.state.senha)
        console.log(this.state.cpf)
        console.log(this.state.telefone)
        console.log(this.state.email)
        console.log(this.state.endereco.logradouro)
    }

    render() {
        return (
            <Card title="Cadastro de Usuário">

                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="bs-component">
                                <fieldset>
                                    <FormGroup label="Nome: *" htmlFor="inputNome">
                                        <input type="nome" value={this.state.nome} onChange={e => this.setState({nome: e.target.value})} className="form-control" id="exampleInputNome1" aria-describedby="nomeHelp" placeholder="Digite o Nome" />
                                    </FormGroup>
                                    <FormGroup label="Senha: *" htmlFor="inputSenha">
                                        <input type="password" value={this.state.senha} onChange={e => this.setState({senha: e.target.value})} className="form-control" id="exampleInputSenha" aria-describedby="senhaHelp" placeholder="Digite o Senha" />
                                    </FormGroup>
                                    <FormGroup label="CPF: *" htmlFor="inputCPF">
                                        <input type="cpf" value={this.state.cpf} onChange={e => this.setState({cpf: e.target.value})} className="form-control" id="exampleInputCPF" aria-describedby="cpfHelp" placeholder="Digite o CPF" />
                                    </FormGroup>
                                    <FormGroup label="Telefone: *" htmlFor="inputTelefone">
                                        <input type="telefone" value={this.state.telefone} onChange={e => this.setState({telefone: e.target.value})} className="form-control" id="exampleInputTelefone" aria-describedby="telefoneHelp" placeholder="Digite o Telefone" />
                                    </FormGroup>
                                    <FormGroup label="Email: *" htmlFor="inputEmail">
                                        <input type="email" value={this.state.email} onChange={e => this.setState({email: e.target.value})} className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Digite o Email" />
                                    </FormGroup>
                                </fieldset>

                                <fieldset>
                                    <legend>Endereço</legend>
                                    <div className="input-group mb-3">
                                        <FormGroup label="CEP: *" htmlFor="inputCEP">
                                            <input type="cep" value={this.state.endereco} onChange={e => this.setState({endereco: e.target.value})} className="form-control" id="exampleInputCEP" aria-describedby="cepHelp" placeholder="Digite o CEP" />
                                            <button onClick={this.entrar} type="button" className="btn btn-info">Buscar</button>
                                        </FormGroup>
                                    </div>

                                    <FormGroup label="Logradouro: *" htmlFor="inputLogradouro">
                                        <input type="logradouro" value={this.state.endereco.logradouro} onChange={e => this.setState({logradouro: e.target.value})} className="form-control" id="exampleInputLogradouro" aria-describedby="logradouroHelp" placeholder="Digite o Logradouro" />
                                    </FormGroup>

                                    <FormGroup label="Numero: *" htmlFor="inputNumero">
                                        <input type="numero" value={this.state.endereco.numero} onChange={e => this.setState({numero: e.target.value})}className="form-control" id="exampleInputNumero" aria-describedby="NumeroHelp" placeholder="Digite o Numero" />
                                    </FormGroup>
                                    <FormGroup label="Complemento: *" htmlFor="inputComplemento">
                                        <input type="complemento" value={this.state.endereco.complemento} onChange={e => this.setState({nome: e.target.value})} className="form-control" id="exampleInputComplemento" aria-describedby="ComplementoHelp" placeholder="Digite o Complemento" />
                                    </FormGroup>
                                    <FormGroup label="Bairro: *" htmlFor="inputBairro">
                                        <input type="bairro" value={this.state.endereco.bairro} onChange={e => this.setState({bairro: e.target.value})} className="form-control" id="exampleInputBairro" aria-describedby="BairroHelp" placeholder="Digite o Bairro" />
                                    </FormGroup>
                                    <FormGroup label="Cidade: *" htmlFor="inputCidade">
                                        <input type="cidade" value={this.state.endereco.cidade} onChange={e => this.setState({cidade: e.target.value})} className="form-control" id="exampleInputCidade" aria-describedby="CidadeHelp" placeholder="Digite o Cidade" />
                                    </FormGroup>

                                    <button onClick={this.salvar} type="button" className="btn btn-success">Salvar</button>
                                    <button onClick="window.location.href='usuarios.html'" type="button" className="btn btn-danger">Voltar</button>

                                </fieldset>
                            </div>

                        </div>
                    </div>
                </div>

            </Card>
        )
    }
}
export default Usuario