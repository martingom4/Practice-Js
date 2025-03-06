import {BrowserRouter, Route, Routes} from 'react-router-dom'
import LoginView from './views/LoginView'
import RegisterView from './views/RegisterView'
import AuthLayout from './layouts/AuthLayouts'


export default function Router(){
    return (<BrowserRouter>
        <Routes>
            <Route element={<AuthLayout />}>
                <Route path="/auth/login" element={<LoginView />} />
                <Route path="/auth/Register" element={<RegisterView />} />
            </Route>
        </Routes>
    </BrowserRouter>
    )
}

