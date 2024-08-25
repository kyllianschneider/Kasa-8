import '../error/error.scss'
import {Link} from 'react-router-dom';

function Error() {
    return (
        <div className="error">
            <h1 className="error__title">404</h1>
            <p className="error__description">Oups! La page <br className="error__break"/>que vous demandez n'existe pas.</p>
            <Link className="error__link" to="/">Retourner sur la page d'accueil</Link>
        </div>
    )
};

export default Error;