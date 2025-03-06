import {Link} from 'react-router-dom';

export default function LoginView(){
    return (
        <>
        <div className=' bg-slate-800 min-h-screen'>
            <div className='max-w-lg mx-auto pt-10 px-5'>
                <img src = '/logo.svg' alt='logo tipo de la app'/>
                <div className=' text-white'>Login</div>
            </div>
        </div>
        <nav>
            <Link to='/auth/register'>
                No tienes cuenta? Creala aca
            </Link>
        </nav>
    </>
    )
}
