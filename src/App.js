import React from 'react';
import { Router } from 'react-router-dom' //Router no lugar de BrowserRouter, para poder usar o history
import { ToastContainer } from 'react-toastify'  //lib para msg toast

import './config/ReactotronConfig'

import { Provider } from 'react-redux'  ///o Provider será o container que vai permitir que todos os outros componentes tenham acesso ao store (state geral) da aplicacao

import history from './services/history'
import store from './store'

import Routes from './routes'
import GlobalStyle from './styles/global'
import Header from './components/Header'


function App() {
  return (
    <Provider store={store}>
      <Router history={history} >
        <Header />
        <Routes />
        <GlobalStyle />
        <ToastContainer autoClose={3000} />
      </Router>
    </Provider>
  );
}

export default App;
