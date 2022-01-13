// Contribuição: Gabreiel Pinheiro
// Assunto:Hofs e Buscar Info na Estrutura do Objeto
// Dentro da Store

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './TabelaStyle.css';

class Table extends Component {
  render() {
    const { bdDadosDespesas } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {
              bdDadosDespesas.map((despesa) => {
                const {
                  value,
                  description,
                  currency,
                  method,
                  tag,
                  exchangeRates,
                } = despesa;
                const searchObject = Object
                  .values(exchangeRates)
                  .find((search) => search.code === currency);
                return (
                  <>
                    <td>{description}</td>
                    <td>{tag}</td>
                    <td>{method}</td>
                    <td>{value}</td>
                    <td>{searchObject.name.split('/')[0]}</td>
                    <td>{Number(searchObject.ask).toFixed(2)}</td>
                    <td>{(value * Number(searchObject.ask)).toFixed(2)}</td>
                    <td>{searchObject.name.split('/')[1]}</td>
                    <td>Real</td>
                    <td className="container-buttons-edit-excluir">
                      <button type="button">EDIT</button>
                      <button type="button">X</button>
                    </td>
                  </>
                );
              })
            }
          </tr>
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  bdDadosDespesas: state.wallet.expenses,
});

Table.propTypes = {
  mapStateToProps: PropTypes.func,
}.isrequired;

export default connect(mapStateToProps)(Table);
