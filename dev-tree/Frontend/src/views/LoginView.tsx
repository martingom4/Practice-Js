import {Link} from 'react-router-dom';

export default function LoginView(){
    return(
        <>
            <div>
                <h1 className=' text-white'>Login</h1>
            </div>
            <nav>
                <Link className= ' text-white ' to='/auth/Register'>
                    ¿Aun no tienes cuenta? Registrate aca
                </Link>
            </nav>
        </>
    )
}

