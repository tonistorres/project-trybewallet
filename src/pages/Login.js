import React from 'react';
import '../App.css';
import perfil from '../assets/perfilLinkedin.jpeg';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: true,
    };
  }

  render() {
    const { disabled } = this.state;
    return (
      <div className="login-container-main">
        <div className="login-container-conteudo">
          <div className="login-container-tech">
            <img src={ perfil } alt="Perfil Dev" />
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
          <label htmlFor="campo-email">
            <p>Email:</p>
            <input
              type="email"
              data-testid="email-input"
              id="campo-email"
              name="email"
            />
          </label>
          <label htmlFor="campo-password">
            <p>Senha:</p>
            <input
              type="password"
              data-testid="password-input"
              id="campo-password"
              name="password"
            />
          </label>
          <button type="button" disabled={ disabled }>
            Entrar
          </button>
        </div>
      </div>
    );
  }
}

export default Login;
