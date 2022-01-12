import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import getCurrency from '../services/moedasAPI';
import { setExpense } from '../actions/index';

import Select from './Select';
import Button from './Button';
import '../index.css';

class BodyWallet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      valor: '',
      moeda: 'USD',
      forma: 'Dinheiro',
      tag: 'Alimentação',
      descricao: '',
      cambio: 0,
      vlconvertido: 0,
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
      valor,
      descricao,
      moeda,
      forma,
      tag,
      cambio,
      vlconvertido,
      moedaDeconversao,
    } = this.state;

    const exchangeRates = await getCurrency();

    setDispachExpense({
      id,
      valor,
      descricao,
      moeda,
      forma,
      tag,
      cambio,
      vlconvertido,
      moedaDeconversao,
      exchangeRates,
    });
    // fazer Auto Increment do id
    this.setState((stateAnterior) => ({
      id: stateAnterior.id + 1,
      valor: '',
      descricao: '',
    }));
  }

  render() {
    const {
      valor,
      moeda,
      forma,
      tag,
      descricao,
      keys,
      exchangeRates,
      moedaDeconversao,
    } = this.state;
    console.log('Api excahgeRates no Render:', exchangeRates, moedaDeconversao);
    const bancoFormas = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const bancoTags = ['Alimentação', 'Lazer', 'Trabalho', 'Saúde'];
    return (
      <div>
        <form className="body-wallet-container-form">
          <label htmlFor="valor">
            <span>Valor:</span>
            <input
              type="text"
              id="valor"
              name="valor"
              value={ valor }
              data-testid="value-input"
              onChange={ this.handleChange }
            />
          </label>
          <span>Moeda:</span>
          <select
            id="moeda"
            name="moeda"
            value={ moeda }
            data-testid="currency-input"
            onChange={ this.handleChange }
          >
            {keys
              .filter((sigla) => sigla !== 'USDT')
              .map((sigla) => (
                <option key={ sigla } value={ `${[sigla]}` } data-testid={ [sigla] }>
                  {sigla}
                </option>
              ))}
          </select>

          <span>Forma Pagamento:</span>
          <Select
            defaultOption="Selecione"
            id="formas"
            name="forma"
            value={ forma }
            options={ bancoFormas }
            data-testid="method-input"
            onChange={ this.handleChange }
          />
          <span>Tag:</span>
          <Select
            defaultOption="Selecione"
            id="tags"
            name="tag"
            value={ tag }
            options={ bancoTags }
            data-testid="tag-input"
            onChange={ this.handleChange }
          />
          <label htmlFor="descricao">
            <span>Descrição:</span>
            <input
              type="text"
              id="descriacao"
              name="descricao"
              value={ descricao }
              data-testid="description-input"
              onChange={ this.handleChange }
            />
          </label>
          <Button
            type="button"
            label="Adicionar despesa"
            onClick={ this.handleClick }
          />
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
