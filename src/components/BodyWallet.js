import React, { Component } from 'react';
import DetailHeaderBody from './DetailHeaderBody';
import Select from './Select';
import Button from './Button';
import '../index.css';

class BodyWallet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      descricao: '',
    };
  }

  render() {
    const { descricao } = this.state;
    const moedas = ['USD', 'BRL', 'ERO'];
    const formas = ['Dinheiro', 'Cartão de crédito', 'Cartão de Débito'];
    const tags = ['Alimentação', 'Lazer', 'Trabalho'];

    return (
      <div>
        <form className="body-wallet-container-form">
          <label htmlFor="valor">
            <span>Valor:</span>
            <input type="text" name="valor" id="valor" />
          </label>
          <span>Moeda:</span>
          <Select
            defaultOption="Selecione"
            onChange={ this.handleChange }
            value={ moedas }
            id="moedas"
            name="moedas"
            options={ moedas }
          />
          <span>Forma Pagamento:</span>
          <Select
            defaultOption="Selecione"
            onChange={ this.handleChange }
            value={ formas }
            id="formas"
            name="formas"
            options={ formas }
          />
          <span>Tag:</span>
          <Select
            defaultOption="Selecione"
            onChange={ this.handleChange }
            value={ tags }
            id="tags"
            name="tags"
            options={ tags }
          />
          <label htmlFor="descricao">
            <span>Descrição:</span>
            <input
              type="text"
              name="descricao"
              value={ descricao }
              id="descriacao"
              onChange={ this.handleChange }
            />
          </label>
          <Button
            type="button"
            label="Adicionar Despesas"
            onClick={ this.handleClick }
          />
        </form>
        <DetailHeaderBody />
      </div>
    );
  }
}

export default BodyWallet;
