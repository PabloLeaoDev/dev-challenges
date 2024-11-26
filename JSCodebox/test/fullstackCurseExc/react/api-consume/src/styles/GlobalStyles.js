import { createGlobalStyle, styled } from 'styled-components';
import * as colors from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    background: ${colors.primaryDarkColor};
    color: ${colors.primaryColor};
  }

  html, border-style, #root {
    height: 100%;
  }

  button {
    cursor: pointer;
    background: ${colors.primaryColor};
    border: none;
    color: #fff;
    padding: 10px 20px;
    border-radius: 4px;
    font-weight: 700;
    transition: all 300ms;
  }

  button:hover {
    filter: brightness(85%);
  }

  a {
    text-decoration: none;
    background: ${colors.primaryColor};
  }

  ul {
    list-style: none;
  }

  body .Toastfy .Toastfy__toast-container .Toastfy__toast--success {
    background: ${colors.successColor};
  }

  body .Toastfy .Toastfy__toast-container .Toastfy__toast--error {
    background: ${colors.errorColor};
  }
`;

export const Container = styled.main`
  max-width: 480px;
  background: #fff;
  margin: 30px auto;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
