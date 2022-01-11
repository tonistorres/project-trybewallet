import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import perfil from '../assets/perfilLinkedin.jpeg';
import '../index.css';

class Header extends Component {
  render() {
    const { email } = this.props;
    return (
      <header className="wallet-container-header">
        <div className="wallet-container-imagem">
          <img src={ perfil } alt="perfil usuario" />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            alt="html"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
            alt="css"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            alt="js"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            alt="react"
          />
          <img
            src="https://img.icons8.com/color/48/000000/redux.png"
            alt="redux"
          />
        </div>
        <div className="wallet-container-email-wallet">
          <div>
            <span>
              Email:&nbsp;&nbsp;
              <strong data-testid="email-field">{ email }</strong>
            </span>
          </div>
          <div>
            <span>
              Despesa Total: R$
              <strong data-testid="total-field"> 0 </strong>
              <strong data-testid="header-currency-field"> BRL </strong>
            </span>
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Header.propTypes = {
  email: PropTypes.string,
}.isrequired;

export default connect(mapStateToProps)(Header);
