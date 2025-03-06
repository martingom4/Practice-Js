import {Link} from 'react-router-dom';
export default function RegisterView() {
    return (
        <>
            <div>
                <h1 className=' text-white'>Register</h1>

            </div>
            <nav>
            <Link className= ' text-white' to='/auth/login'>
                ¿Ya tienes cuenta? Inicia sesion aca
            </Link>
        </nav>
        </>
    );
};


