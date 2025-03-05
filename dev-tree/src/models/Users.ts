// aca vamos a definir nuestro modelos

import mongoose, { Schema } from "mongoose";


const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true //quita los espacios en blanco
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

const User = mongoose.model('User', userSchema)
export default User
