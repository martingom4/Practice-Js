// Date: 03/18/21
type ErrorMessageProps = {
  children: React.ReactNode
}
export default function ErrorMessage ({ children}: ErrorMessageProps) {
  return(

    <p className="text-red-500 text-sm font-semibold uppercase p-1">{children}</p>

  )
}
