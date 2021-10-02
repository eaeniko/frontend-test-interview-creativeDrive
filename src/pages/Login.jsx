// import { Button } from 'bootstrap';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom';

export default function Login() {
  const [login, setLogin] = useState('user');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  function handleBtnLogin(e) {
    e.preventDefault();
    if (login === 'user') {
      history.push('/user');
    } else {
      history.push('/admin');
    }
    if (email === '') {
      alert('Insira um email valido');
      history.push('/');
    }
    if (password === '') {
      alert('Insira uma senha valida');
      history.push('/');
    }
    return null;
  }

  function handleCheckUser({ target }) {
    setLogin(target.id);
  }
  function handleEmail({ target }) {
    setEmail(target.value);
  }
  function handlePassword({ target }) {
    setPassword(target.value);
  }
  return (
    <div>
      <form>
        <p>Login</p>
        Entrar como:
        <label htmlFor="user">
          <input
            type="radio"
            value="user"
            name="search-radio"
            id="user"
          />
          Usuário
        </label>
        <label htmlFor="admin">
          <input
            type="radio"
            value="admin"
            name="search-radio"
            id="admin"
            onChange={handleCheckUser}
            required
          />
          Admin
        </label>
        <label htmlFor="email" required>
          Email:
          <input type="email" name="email" placeholder="seuemail@gmail.com" required onChange={handleEmail} />
        </label>
        <label htmlFor="password">
          Senha:
          <input type="password" name="password" placeholder="********" required onChange={handlePassword} />
        </label>
        <button type="submit" className="btn btn-primary" onClick={handleBtnLogin}>Entrar</button>
      </form>
    </div>
  );
}
