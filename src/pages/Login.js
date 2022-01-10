import React from 'react';
import '../App.css';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import perfil from '../assets/perfilLinkedin.jpeg';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      redirect: false,
      disabled: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.onValidatioButton = this.onValidatioButton.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  onValidatioButton() {
    const LENGTH_MIN_PASSWORD = 6;
    const {
      email,
      password,
    } = this.state;

    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (regex.test(email) && password.length >= LENGTH_MIN_PASSWORD) {
      this.setState({ disabled: false });
    } else {
      this.setState({ disabled: true });
    }
  }

  handleChange({ target }) {
    const { name, value } = target;
    console.log('name:', name, 'value:', value);
    this.setState({ [name]: value }, this.onValidatioButton);
  }

  handleClick() {
    this.setState({ redirect: true });
  }

  render() {
    const { disabled, email, password, redirect } = this.state;

    if (redirect) {
      return <Redirect to="/carteira" />;
    }

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
              value={ email }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="campo-password">
            <p>Senha:</p>
            <input
              type="password"
              data-testid="password-input"
              id="campo-password"
              name="password"
              value={ password }
              onChange={ this.handleChange }
            />
          </label>
          <button
            type="button"
            disabled={ disabled }
            onClick={ this.handleClick }
          >
            Entrar
          </button>
        </div>
      </div>
    );
  }
}

export default Login;
