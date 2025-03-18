import { Outlet } from "react-router-dom"
import { Toaster } from "sonner"

import Footer from "../components/Footer.tsx"
import Header from "../components/Header.tsx"

export default function HomeLayout(){
    return(
        <>
            {/*aca abajo pondre el header */}
            <Header/>
            <div className=' bg-slate-800 min-h-screen'>
                <div className='py-10 text-center'>
                    <Outlet/>
                </div>
            </div>
            <Footer/>
        </>
    )
}
