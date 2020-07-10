import React from 'react'
import { Link } from 'react-router-dom'
import { BsPerson, BsEnvelope, BsLock } from "react-icons/bs"

import './styles.css';
import logoMarca from '../../assets/logo.png'

const Register = () => {
  return (
    <div className="container">
      <img src={logoMarca} alt="logo" />

      <div className="login-container">
        <h3>Cadastro</h3>

        <form>
          <div className="form-item">
            <input type="text" name="name" id="" required />
            <label htmlFor="nome">
              <BsPerson size="14" /> Nome completo
            </label>
          </div>

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

          <div className="form-item">
            <input type="password" name="passwordConfirmation" id="" required />
            <label htmlFor="senha">
              <BsLock size="14" /> Confirmação de senha
            </label>
          </div>

          <button type="submit">Cadastrar-se</button>
        </form>

        <p>
          <Link to="/login">Voltar ao Login</Link>
        </p>

      </div>
    </div>
  )
}

export default Register
