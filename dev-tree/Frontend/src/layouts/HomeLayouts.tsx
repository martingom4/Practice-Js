import { Outlet } from "react-router-dom"
import { Toaster } from "sonner"
import Footer from "../components/Footer.tsx"

export default function HomeLayout(){
    return(
        <>
            <div className=' bg-slate-800 min-h-screen'>
                <div className='py-10 text-center'>
                    <Outlet/>
                </div>
            </div>
            <Footer/>
        </>
    )
}
