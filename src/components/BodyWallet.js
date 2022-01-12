import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import getCurrency from '../services/moedasAPI';
import { setExpense } from '../actions/index';

import Select from './Select';
import '../index.css';

class BodyWallet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      value: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
      // cambio: 0,
      // vlconvertido: 0,
      keys: [],
      moedaDeconversao: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.apiChamada = this.apiChamada.bind(this);
  }

  componentDidMount() {
    this.apiChamada();
  }

  async apiChamada() {
    const moedas = await getCurrency();
    const keys = Object.keys(moedas);
    this.setState({
      keys,
    });
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  async handleClick() {
    const { setDispachExpense } = this.props;
    const {
      id,
      value,
      description,
      currency,
      method,
      tag,
      // cambio,
      // vlconvertido,
      // moedaDeconversao,
    } = this.state;

    const exchangeRates = await getCurrency();

    setDispachExpense({
      id,
      value,
      description,
      currency,
      method,
      tag,
      // cambio,
      // vlconvertido,
      // moedaDeconversao,
      exchangeRates,
    });
    // fazer Auto Increment do id
    this.setState((stateAnterior) => ({
      id: stateAnterior.id + 1,
      value: '',
      description: '',
    }));
  }

  render() {
    const {
      value,
      description,
      currency,
      method,
      tag,
      keys,
      exchangeRates,
      moedaDeconversao,
    } = this.state;
    console.log('Api excahgeRates no Render:', exchangeRates, moedaDeconversao);
    const bancoFormas = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const bancoTags = ['Alimentação', 'Lazer', 'Trabalho', 'Saúde', 'Transporte'];
    return (
      <div>
        <form className="body-wallet-container-form">
          <label htmlFor="value">
            <span>Valor:</span>
            <input
              type="text"
              id="value"
              name="value"
              value={ value }
              data-testid="value-input"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="currency">
            <span>Moeda:</span>
            <select
              id="currency"
              name="currency"
              value={ currency }
              data-testid="currency-input"
              onChange={ this.handleChange }
            >
              {keys
                .filter((sigla) => sigla !== 'USDT')
                .map((sigla) => (
                  <option key={ sigla } value={ sigla } data-testid={ sigla }>
                    {sigla}
                  </option>
                ))}
            </select>
          </label>
          <span>Forma Pagamento:</span>
          <Select
            defaultOption="Selecione"
            id="method"
            name="method"
            value={ method }
            options={ bancoFormas }
            testeId="method-input"
            onChange={ this.handleChange }
          />
          <Select
            label="Tag"
            defaultOption="Selecione"
            id="tags"
            name="tag"
            value={ tag }
            options={ bancoTags }
            testeId="tag-input"
            onChange={ this.handleChange }
          />
          <label htmlFor="description">
            <span>Descrição:</span>
            <input
              type="text"
              id="description"
              name="description"
              value={ description }
              data-testid="description-input"
              onChange={ this.handleChange }
            />
          </label>
          <button
            type="button"
            onClick={ this.handleClick }
          >
            Adicionar despesa
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setDispachExpense: (stateLocal) => dispatch(setExpense(stateLocal)),
});

BodyWallet.propTypes = {
  mapDispatchToProps: PropTypes.func,
}.isrequired;

export default connect(null, mapDispatchToProps)(BodyWallet);
