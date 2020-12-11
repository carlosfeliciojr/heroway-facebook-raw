// Interfaces:
import { IGithubInitialState } from "../../interfaces/github";

// Estado inicial do componente:
const INITIAL_STATE: IGithubInitialState = {
    loading: false,
    error: false,
    errorMessage: '',
    user: {
        login: ''
    }
};

// Boa prática, caso mude o type, toda aplicação que usa a variável
// também mudará. Assim como o @pasta representa o local que ela está.
const GET_GITHUB_USER_LOADING = '@github/GET_GITHUB_USER_LOADING'
const GET_GITHUB_USER_SUCCESS = '@github/GET_GITHUB_USER_SUCCESS'
const GET_GITHUB_USER_FAIL = '@github/GET_GITHUB_USER_FAIL'

// Reducer.
export function githubReducer(state = INITIAL_STATE, action: any): IGithubInitialState {
    switch (action.type) {

        // Em caso de sucesso:
        case GET_GITHUB_USER_SUCCESS:
            return {
                ...INITIAL_STATE,
                user: action.payload.user,
                errorMessage: action.payload.errorMessage
            }

        // Em caso de carregamento:
        case GET_GITHUB_USER_LOADING:
            return {
                ...INITIAL_STATE,
                loading: true,
            }

        // Em caso de erro:
        case GET_GITHUB_USER_FAIL:
            return {
                ...INITIAL_STATE,
                error: true,
            }

        // Por padrão retorna o estado inicial.
        default:
            return state;
    }
}

// Action.
export function getGithubUser(query: string) {

    // Método para que o ReduxThunk possa retornar uma função async.
    return async (dispatch: any) => {

        // Dispara para o reducer o type carregando, antes de tentar o try catch.
        dispatch(getGithubUserLoading());

        // Funções asyc devem ter try catch, pois podem retornar erro se
        // houver problemas com o servidor.
        try {

            // Obtem resposta da API do Github.
            const response = await fetch(`https://api.github.com/search/users?q=${query}`)

            // Converse a resposta em JSON.
            const json = await response.json();

            // Variável user recebe o primeiro item da lista de objetos do JSON.
            const user = json.items[0];

            // Em caso de sucesso, dispara o type adquado.
            dispatch(getGithubUserSuccess(user));

            // Em caso de erro, dispara o type adquado.
        } catch (error) 
        {

            dispatch(getGithubUserFail());
            console.log(error);
        }
    }
}

// Mantendo um código mais bonito.
function getGithubUserSuccess(user : any) {
    return {
        type: GET_GITHUB_USER_SUCCESS,
        payload: {
            user: user,
            errorMessage: !user ? 'usuário não encontrado' : null
        }
    }
}

function getGithubUserLoading() {
    return {
        type: GET_GITHUB_USER_LOADING,
    }
}

function getGithubUserFail() {
    return {
        type: GET_GITHUB_USER_FAIL,
    }
}