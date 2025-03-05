import {NavLink, Link} from 'react-router-dom';

export default function LoginView(){
    return (
        <>
        <div>
            <h1>Login</h1>

        </div>
        <nav>
            <Link to='/auth/register'>
                No tienes cuenta? Creala aca
            </Link>
        </nav>
    </>
    )
}
