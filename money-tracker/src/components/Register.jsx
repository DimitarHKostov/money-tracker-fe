import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmailHandler = event => {
    setEmail(event.target.value);
  };

  const onChangeUsernameHandler = event => {
    setUsername(event.target.value);
  };

  const onChangePasswordHandler = event => {
    setPassword(event.target.value);
  };

  const registerUser = (e) => {
    axios.post('http://localhost:80/api/v1/register', {
      email: email, username: username, password:password
    })
        .then(response => console.log(response))
        .catch(error => console.log(error));
  }

  return (
    <div>
      <input
      type="text"
      name="email"
      onChange={onChangeEmailHandler}
      value={email}
    />
      <input
      type="text"
      name="username"
      onChange={onChangeUsernameHandler}
      value={username}
    />
      <input
      type="text"
      name="password"
      onChange={onChangePasswordHandler}
      value={password}
    />

    <button onClick={registerUser}>Register</button>
    </div>
  );
}

export default Register;