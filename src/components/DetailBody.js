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
                <th>Descricão</th>
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
                    id,
                    descricao,
                    tag,
                    forma,
                    valor,
                    moeda,
                    cambio,
                    vlconvertido,
                    moedaDeconversao,
                  },
                ) => (
                  <tr key={ id }>
                    <td>{ descricao }</td>
                    <td>{ tag }</td>
                    <td>{ forma }</td>
                    <td>{ valor }</td>
                    <td>{ moeda }</td>
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
