import ErrorMessage from "../components/ErrorMessage.tsx";
import {Link } from "react-router-dom";
import UserRegister from "../hooks/userRegister.ts";


export default function RegisterView() {
  const { register, handleSubmit, watch, reset, errors, handleRegister } = UserRegister();

  return (
    <>
      <form
        onSubmit={handleSubmit(handleRegister)}
        className="bg-white px-5 py-20 rounded-lg space-y-10 mt-10"
      >
        <div className="grid grid-cols-1 space-y-3">
          <label htmlFor="name" className="text-2xl text-slate-500">Nombre</label>
            <input
              id="name"
              type="text"
              placeholder="Tu Nombre"
              className="bg-slate-200 border-none p-3 rounded-lg placeholder-slate-400"
              {...register("name", {
                required: "El nombre es obligatorio",
              })}
            />
          {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
        </div>


        <div className="grid grid-cols-1 space-y-3">
          <label htmlFor="email" className="text-2xl text-slate-500">E-mail</label>
            <input
              id="email"
              type="email"
              placeholder="Email de Registro"
              className="bg-slate-200 border-none p-3 rounded-lg placeholder-slate-400"
              {...register("email", {
                required: "El email es obligatorio",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "El email debe ser valido",
                },
              })}
            />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </div>


        <div className="grid grid-cols-1 space-y-3">
          <label htmlFor="handle" className="text-2xl text-slate-500">Handle{" "}</label>
            <input
              id="handle"
              type="text"
              placeholder="Nombre de usuario: sin espacios"
              className="bg-slate-200 border-none p-3 rounded-lg placeholder-slate-400"
              {...register("handle", {
                required: "El Handle es obligatorio",
              })}
            />
          {errors.handle && <ErrorMessage>{errors.handle.message}</ErrorMessage>}
        </div>



        <div className="grid grid-cols-1 space-y-3">
          <label htmlFor="password" className="text-2xl text-slate-500">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Password de Registro"
            className="bg-slate-200 border-none p-3 rounded-lg placeholder-slate-400"
            {...register("password", {
              required: "El password es obligatorio",
              minLength: {
                value: 8,
                message: "El password debe tener al menos 8 caracteres",
              },
            })}
          />
        {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}

        </div>

        <div className="grid grid-cols-1 space-y-3">
            <label
              htmlFor="password_confirmation"
              className="text-2xl text-slate-500"
            >
              Repetir Password
            </label>
            <input
              id="password_confirmation"
              type="password"
              placeholder="Repetir Password"
              className="bg-slate-200 border-none p-3 rounded-lg placeholder-slate-400"
              {...register("password_confirmation", {
                required: "El password debe ser igual al anterior",
                validate: (value) => value === watch("password") || "Las contraseñas no coinciden",
              })}
            />
            {errors.password_confirmation && <ErrorMessage>{errors.password_confirmation.message}</ErrorMessage>}

          </div>

          <input
            type="submit"
            className="bg-cyan-400 p-3 text-lg w-full uppercase text-slate-600 rounded-lg font-bold cursor-pointer"
            value="Crear Cuenta"
          />
      </form>

      <nav className="mt-10 ">
        <Link
          className=" text-white text-center text-lg block"
          to="/auth/login"
        >
          ¿Ya tienes cuenta? Inicia sesion aca
        </Link>
      </nav>

    </>

  );
}
