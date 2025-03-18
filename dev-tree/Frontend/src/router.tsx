import {BrowserRouter, Route, Routes} from 'react-router-dom'
import LoginView from './views/LoginView'
import RegisterView from './views/RegisterView'
import Home from './views/Home'
import AuthLayout from './layouts/AuthLayouts'
import HomeLayout from './layouts/HomeLayouts'


export default function Router(){
    return (<BrowserRouter>
        <Routes>
            {/*esto es la ruta de home*/}
            <Route element={<HomeLayout />}>
                <Route path='/' element={<Home />} />
            </Route>
             {/*esto es la ruta de autenticacion*/}
            <Route element={<AuthLayout />}>
                <Route path="/auth/login" element={<LoginView />} />
                <Route path="/auth/Register" element={<RegisterView />} />
            </Route>
        </Routes>
    </BrowserRouter>
    )
}

