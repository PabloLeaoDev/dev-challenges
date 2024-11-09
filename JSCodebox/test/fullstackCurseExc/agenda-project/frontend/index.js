import 'core-js/stable'; // for old browsers
import 'regenerator-runtime/runtime'; // for old browsers

import Login from './modules/Login';

const register = new Login('.form-register');
const login = new Login('.form-login');
register.init();
login.init();

// import './assets/css/style.css';