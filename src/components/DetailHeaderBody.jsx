import React, { Component } from 'react';
import './DetailHeaderBodyStyle.css';

class DetailHeaderBody extends Component {
  render() {
    return (
      <div className="detail-header-body-container-main">
        <span>Descrição</span>
        <span>Tag</span>
        <span>Forma Pagamento</span>
        <span>Valor</span>
        <span>Moeda</span>
        <span>Câmbio Utilizado</span>
        <span>Valor Convertido</span>
        <span>Moeda de Conversão</span>
        <span>Editar/Excluir</span>
      </div>
    );
  }
}

export default DetailHeaderBody;
