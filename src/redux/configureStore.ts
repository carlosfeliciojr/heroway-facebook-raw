// Bibliotecas para performance.
import * as Redux from 'redux';
import * as ReduxDevtools from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';

// Reducers.
import { githubReducer } from './reducers/github';


// Funções reducers devem ser inseridos dentro do objeto reducers.
const reducers = {
    github: githubReducer
};

// Método utilizado para criar a store.
export const rootReducers = Redux.combineReducers(reducers);
function configureStore() {

    // ReduxThunk permite a utilização de funções async, ele é um middleware.
    const middlewares = Redux.applyMiddleware(ReduxThunk);

    // ReduxDevtools permitirá utilizar ferramentas que auxiliarão a store.
    const enhancers = ReduxDevtools.composeWithDevTools(middlewares);

    // Método padrão de crianção da store.
    const store = Redux.createStore(rootReducers, enhancers);
    return store;
}

export default configureStore;