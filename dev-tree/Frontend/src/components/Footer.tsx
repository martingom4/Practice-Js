// Objetivo: Footer de la pagina web
export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white p-6 text-center">


            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 text-sm ">
                {/* Sección de Información */}
                <div>
                    <h2 className="text-lg font-bold">Sobre Nosotros</h2>
                    <p className="mt-2 text-gray-400">
                        Desarrollo web y soluciones digitales con pasión.
                    </p>
                </div>

                {/* Sección de Contacto */}
                <div>
                    <h2 className="text-lg font-bold">Contacto</h2>
                    <p className="mt-2 text-gray-400">📧 martingomez3696@gmail.com</p>
                    <p className="text-gray-400">📍 Panama, Panama</p>
                </div>
            </div>

            {/* Derechos de Autor */}
            <div className="mt-6 border-t border-gray-700 pt-4 text-gray-500 text-sm">
                © {new Date().getFullYear()} Martin Gomez. Todos los derechos reservados.
            </div>
        </footer>
    );
}
// en base a esto puedes heredar el footer a todas las paginas que quieras con solo importar el componente Footer.tsx
