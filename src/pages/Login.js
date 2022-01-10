import React from 'react';
import '../App.css';

class Login extends React.Component {
  render() {
    return (
      <div className="login-container-main">
        <div className="login-container-conteudo">
          <label htmlFor="campo-email">
            <p>Email:</p>
            <input type="email" id="campo-email" name="email" />
          </label>
          <label htmlFor="campo-password">
            <p>Senha:</p>
            <input type="password" id="campo-password" name="password" />
          </label>
        </div>
      </div>
    );
  }
}

export default Login;
