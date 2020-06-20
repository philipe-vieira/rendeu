import React from 'react'
import { Link } from 'react-router-dom'
import {  BsEnvelope, BsLock } from "react-icons/bs"

import './styles.css'
import logoMarca from '../../assets/logo.png'

const Login = () => {
  return (
    <div className="container">
      <img src={logoMarca} alt="logo"/>
      
      <div className="login-container">
        <h3>Login</h3>

        <form>
          <div className="form-item">
            <input type="email" name="email" id="" required />
            <label htmlFor="email">
              <BsEnvelope size="14" /> Email
            </label>
          </div>

          <div className="form-item">
            <input type="password" name="password" id="" required />
            <label htmlFor="senha">
              <BsLock size="14" /> Senha
            </label>
          </div>

          <button type="submit">Login</button>

        </form>

        <p>
          <Link to="/">Esqueceu a senha?</Link> Ou <Link to="/register">Cadastre-se</Link>
        </p>
      </div>
    </div>
  )
}

export default Login