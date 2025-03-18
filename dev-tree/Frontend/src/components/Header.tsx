
export default function Header() {
    return(
        <>
        <header className="bg-gray-900 text-white p-6 text-center">
            {/*este div va a ser para lo principal */}
            <div className=" max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-1 gap-6 text-sm">
                <h1 className="text-2xl text-white " >Esto es un Header</h1>
            </div>
        </header>
        </>
    )
}
