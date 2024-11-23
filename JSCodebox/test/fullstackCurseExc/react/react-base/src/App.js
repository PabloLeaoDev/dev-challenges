import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';

import store from './store';
import GlobalStyle from './styles/GlobalStyles';
import Header from './components/Header';
import CustomRouter from './routes';

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <CustomRouter />
          <GlobalStyle />
          <ToastContainer autoClose={3000} className={'toast-container'} />
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
