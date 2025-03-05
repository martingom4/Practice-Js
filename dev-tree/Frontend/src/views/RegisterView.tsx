import {NavLink, Link} from 'react-router-dom';
export default function RegisterView() {
    return (
        <>
            <div>
                <h1>Register</h1>

            </div>
            <nav>
            <Link to='/auth/login'>
                Ya tienes cuenta? Inicia sesion aca
            </Link>
        </nav>
        </>
    );
};


