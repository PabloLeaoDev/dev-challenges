import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { useDispatch } from 'react-redux';
import { get } from 'lodash';

import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';
import * as actions from '../../store/modules/auth/actions';

export default function Login(props) {
  const dispatch = useDispatch();

  const prevPath = get(props, 'location.state.prevPath', '/');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    let formsErrors = false;

    if (password.length < 6 || password.length > 50) {
      formsErrors = true;
      toast.error('The password is invalid');
    }

    if (!isEmail(email)) {
      formsErrors = true;
      toast.error('The email is invalid');
    }

    if (formsErrors) return false;

    dispatch(actions.loginRequest({ email, password, prevPath }));

    return true;
  }

  return (
    <Container>
      <h1>Login</h1>

      <Form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your e-mail"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Your password"
        />
        <button type="submit">Enter</button>
      </Form>
    </Container>
  );
}
