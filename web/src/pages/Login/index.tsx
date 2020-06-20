import React from 'react'

import './styles.css';
import logoMarca from '../../assets/logo.png'

const Login = () => {
  return (
    <div className="container">
      <img src={logoMarca} alt="logo"/>
      <div className="login-container">
        <h3>Login</h3>

        <form>
          <div className="form-item">
            <input type="email" name="email" id="" required/>
            <label htmlFor="email">Email</label>
          </div>

          <div className="form-item">
            <input type="password" name="password" id="" required/>
            <label htmlFor="senha">Senha</label>
          </div>

          <button type="submit">Enviar</button>

        </form>

        <p>
          <a 
            href="http://" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Esqueceu a senha? 
          </a> Ou <a 
            href="http://" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Cadastre-se
          </a>
        </p>
      </div>
    </div>
  )
}

export default Login