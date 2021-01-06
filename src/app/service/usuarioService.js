import ApiService from '../apiservice'

class UsuarioService extends ApiService{
    constructor(){
        super('/api/usuarios')
    }

    autenticar(credenciais){
        return this.post('/autenticar', credenciais)
    }
    obterUsuarioPorId(id){
        return this.get(`/${id}`)
    }
    salvar(usuario){
        return this.post('/', usuario)
    }
    validar(usuario){
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
}
export default UsuarioService