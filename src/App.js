import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import './config/ReactotronConfig'

import { Provider } from 'react-redux'  ///o Provider será o container que vai permitir que todos os outros componentes tenham acesso ao store (state geral) da aplicacao
import store from './store'

import Routes from './routes'
import GlobalStyle from './styles/global'
import Header from './components/Header'


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes />
        <GlobalStyle />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
