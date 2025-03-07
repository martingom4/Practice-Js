import {Link} from 'react-router-dom';

export default function LoginView(){
    return (
      <>
        <div>
          <h1 className=" text-white text-4xl font-bold">Iniciar sesion</h1>
        </div>

        <nav className="mt-10 ">
          <Link
            className=" text-white text-center text-lg block"
            to="/auth/Register"
          >
            ¿Aun no tienes cuenta? Registrate aca
          </Link>
        </nav>
      </>
    );
}

