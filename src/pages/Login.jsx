// import { Button } from 'bootstrap';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { WalletFill, PersonFill } from 'react-bootstrap-icons';
import { useHistory } from 'react-router-dom';
import './Login.css';

export default function Login() {
  document.title = 'Login';
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
    console.log(target.id);
  }
  function handleEmail({ target }) {
    setEmail(target.value);
  }
  function handlePassword({ target }) {
    setPassword(target.value);
  }
  return (
    <div className="container ">
      <h2 className="center">Faça seu login</h2>
      <form className="form-horizontal center">
        <div className="form-group center ">
          <label className="control-label col-sm-3" htmlFor="email" onChange={handleEmail}>
            Email:
            <div className="col-sm-10 input-group">
              <PersonFill size={30} />
              <input type="email" className="form-control" id="email" placeholder="seuEmail@gmail.com" />
            </div>
          </label>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-3" htmlFor="pwd" onChange={handlePassword}>
            Password:
            <div className="col-sm-10 input-group">
              <WalletFill size={30} />
              <input type="password" className="form-control" id="pwd" placeholder="*******" />
            </div>
          </label>
        </div>
        <div className="form-group center">
          <div className="center ">
            <div className="radio ">
              <label htmlFor="user" className="radio">
                <input
                  type="radio"
                  value="user"
                  name="search-radio"
                  id="user"
                  onChange={handleCheckUser}
                />
                User
              </label>
              <label htmlFor="admin">
                <input
                  type="radio"
                  value="admin"
                  name="search-radio"
                  id="admin"
                  onChange={handleCheckUser}
                />
                Admin
              </label>
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="center">
            <button type="submit" className="w-85 btn btn-lg btn-primary" onClick={handleBtnLogin}>Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}
