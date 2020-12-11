// Bibliotecas:
import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import * as ReactRedux from 'react-redux';

// Interface:
import { IReducers } from '../../../redux/interfaces/reducers';

// Actions:
import { getGithubUser } from '../../../redux/reducers/github';

// CSS:
import './login.css';

// Config:
import PATHS from '../../../config/paths';


function Login() {

    // Dispara as ações enviando para o Redux.
    const dispatch = ReactRedux.useDispatch();

    // Captura o input referente ao login.
    const [user, setUser] = React.useState("");

    // Variável que armazena o estado/dados do reducer github.
    const githubState = ReactRedux.useSelector((reducers: IReducers) => {
        return reducers.github;
    });

    // Atualiza o caminho da página para o destino utilizado, ex: history.push("/caminho").
    const history = ReactRouterDOM.useHistory();

    // Renderiza a página quando ouver mudanças nas dependências e acordo
    // com a condição.
    React.useEffect(() => {
        if (githubState.user.login !== '') {
            history.push(PATHS.FEED);
        }
    }, [githubState.user, history]);

    // Função que realiza a atualização da variável user através do valor 
    // inserido no input.
    function handleChange(event: any) {
        const value = event.currentTarget.value;
        setUser(value);
    }

    // Função que realiza o envio dos dados do user para a api github.
    function handleClick() {
        dispatch(getGithubUser(user));
    }

    // Função que realiza o envio dos dados do user para a api através do
    // da tecla Enter.
    function handleEnter(event: any) {
        if (event.key === 'Enter') {
            handleClick();
        }
    }

    return (
        <div className="login">
            <div className="login-box">
                {githubState.errorMessage}
                <input
                    className="github-input"
                    type="text"
                    placeholder="Digite seu usuário do Github"
                    onChange={handleChange}
                    onKeyUp={handleEnter}
                    value={user}
                />
                <button
                    className="github-button"
                    onClick={handleClick}
                >
                    {githubState.loading ? "Loading..." : "Login"}
                </button>
            </div>
        </div>
    );
}

export default Login;