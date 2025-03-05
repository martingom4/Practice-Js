// aca vamos a definir nuestro modelos

import mongoose, { Schema } from "mongoose";

// no podemos inferir el tipo de dato de la variable User
// por lo que debemos especificar el tipo de dato
// o en type seria TUser
export interface IUser {
    name: string,
    email: string,
    password: string
}
// la interfaz tiene que ser un espejo de el schema
const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
})

const User = mongoose.model<IUser>('User', userSchema)
export default User
