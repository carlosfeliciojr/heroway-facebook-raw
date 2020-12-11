// Bibliotecas:
import React from 'react';
import { useHistory } from 'react-router-dom';
import * as ReactRedux from 'react-redux';

// Componentes:
import Post from './Post';
import ProfileSidebar from './ProfileSidebar';

// Interfaces:
import { IReducers } from '../../../redux/interfaces/reducers';

// CSS:
import './feed.css';

// Config:
import PATHS from '../../../config/paths';

function Feed() {

    // Variável que armazena o estado/dados do reducer github.
    const githubState = ReactRedux.useSelector((reducers: IReducers) => {
        return reducers.github;
    });

    // Atualiza o caminho da página para o destino utilizado, ex: history.push("/caminho").
    const history = useHistory();

    React.useEffect(() => {
        if (githubState.user.login === '') {
            history.push(PATHS.LOGIN);
        }
    }, [githubState.user, history]);

    return (
        <>
            <div className="feed">
                <div className="container">
                    <Post />
                </div>
            </div>

            <ProfileSidebar user={githubState.user} />
        </>
    );
}

export default Feed;