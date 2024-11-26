import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { get } from 'lodash';

import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';
import axios from '../../services/axios';
import history from '../../services/history';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    let formsErrors = false;

    if (name.length < 3 || name.length > 255) {
      formsErrors = true;
      toast.error('The name must be between 3 and 255 characters');
    }

    if (password.length < 6 || password.length > 50) {
      formsErrors = true;
      toast.error('The password must be between 6 and 50 characters');
    }

    if (!isEmail(email)) {
      formsErrors = true;
      toast.error('The email must be valid');
    }

    if (formsErrors) return false;

    try {
      await axios.post('/users/', {
        name,
        password,
        email
      });
      toast.success('Resgister completed successfully');
      history.push('/login');
    } catch (err) {
      const errors = get(err, 'response.data.errors', []);
      console.log(errors);

      errors.map((error) => toast.error(error));
    }
    return true;
  }

  return (
    <Container>
      <h1>Create your account</h1>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your e-mail"
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Your password"
          />
        </label>

        <button type="submit">Create my account</button>
      </Form>
    </Container>
  );
}
