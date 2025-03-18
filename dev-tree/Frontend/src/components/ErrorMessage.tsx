// Date: 03/18/21
type ErrorMessageProps = {
  children: React.ReactNode
}
export default function ErrorMessage ({ children}: ErrorMessageProps) {
  return(

    <p className="text-red-500 text-sm font-semibold uppercase p-2 bg-red-100">{children}</p> // necesitamos renderizar un mensaje pero puesto por mi en otro lado 

  )
}
