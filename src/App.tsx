// Bibliotecas:
import React from 'react';

// importando biblioteca responsável por ligar o React ao Redux.
// Componente ReactRedux.Provider é responsável por permitir a
// utilização da store na aplicação.
import * as ReactRedux from 'react-redux';

// Importanto a Store
import configureStore from './redux/configureStore';

// Componentes.
import Header from './components/Header';
import Main from './components/Main';

// Variável representando a store.
const store = configureStore();

function App() {
  return (
    <>
      <ReactRedux.Provider store={store}>
        <Header />
        <Main />
      </ReactRedux.Provider>
    </>
  );
}

export default App;
