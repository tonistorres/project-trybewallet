import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './DetailBodyStyle.css';

class DetailBody extends Component {
  render() {
    const { dadosDespesas } = this.props;
    return (
      <div className="detail-body-container-main">
        {dadosDespesas.length ? (
          <div>
            <table>
              <tr>
                <th>Descrição</th>
                <th>Tag</th>
                <th>Método de pagamento</th>
                <th>Valor</th>
                <th>Moeda</th>
                <th>Cambio Utilizado</th>
                <th>Valor Convertido</th>
                <th>Moeda de conversão</th>
              </tr>

              {
                dadosDespesas.map((
                  {
                    description,
                    tag,
                    method,
                    value,
                    currency,
                    cambio,
                    vlconvertido,
                    moedaDeconversao,
                  }, index,
                ) => (
                  <tr key={ index }>
                    <td>{ description }</td>
                    <td>{ tag }</td>
                    <td>{ method }</td>
                    <td>{ value }</td>
                    <td>{ currency }</td>
                    <td>{ cambio }</td>
                    <td>{ vlconvertido }</td>
                    <td>{ moedaDeconversao }</td>
                    <td>
                      <button type="button">
                        Editar
                      </button>
                    </td>
                    <td>
                      <button type="button">
                        excluir
                      </button>
                    </td>
                  </tr>
                ))
              }
            </table>
          </div>
        ) : null}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  dadosDespesas: state.wallet.expenses,
});

DetailBody.propTypes = {
  mapStateToProps: PropTypes.func,
}.isrequired;

export default connect(mapStateToProps)(DetailBody);
