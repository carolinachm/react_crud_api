import React from 'react';
import ApiCep from '../app/service/ApiCep';



class BuscaCep extends React.Component {
  constructor() {
    super();

    this.state = {
        rua: 'Rua...'
      , bairro: 'Bairro...'
      , cidade: 'Cidade...'
      , estado: 'Estado'
    }
  }

  handleDados(e) {
    // Pegando o CEP
    const cep = e.target.value;
    // Consultando a API
    ApiCep.SearchCep(cep).then((res) => {
      let rua       = res.data.logradouro;
      let bairro    = res.data.bairro;
      let cidade    = res.data.localidade;
      let estado    = res.data.uf;
      console.log(ApiCep.SearchCep(cep))
      // Mudando o estado
      this.setState({
        rua: rua
      , bairro: bairro
      , cidade: cidade
      , estado: estado
      })
    })
  }

  render() {
    return(
      <div>
          <form className="container box is-3">
              <label className="label">Cep</label>
              <p className="control">
                <input type="text" className="form-control" onBlur={ this.handleDados.bind(this) } required="true" placeholder="Cep..." />
              </p>

              <label className="label">Endereço</label>
              <p className="control">
                <input type="text" className="form-control" value={ this.state.rua}  onChange={e => this.setState({ rua: e.target.value })}disabled/>
              </p>

              <label className="label">Número</label>
              <p className="control">
                <input type="number" className="form-control" />
              </p>

              <label className="label">Bairro</label>
              <p className="control">
                <input type="text" className="form-control" value={ this.state.bairro}  onChange={e => this.setState({ bairro: e.target.value })} disabled/>
              </p>

              <label className="label">Cidade</label>
              <p className="control">
                <input type="text" className="form-control" value={ this.state.cidade} disabled/>
              </p>

              <label className="label">UF</label>
              <p className="control">
                <input type="text" className="form-control" value={ this.state.estado} disabled/>
              </p>
          </form>
      </div>
    );
  }
}

export default BuscaCep;