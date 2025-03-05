// aca vamos a tener funciones que se van a llamar desde nuestros routers
import e, { Request, Response } from 'express'
import User from "../models/Users"

export const createAccount =  async (req: Request, res: Response)=> {
    const {email} = req.body
    const userExists = await User.findOne({email})
    if (userExists) {
        const error = new Error('El Email ya existe en la base de datos')
        res.status(400).json({error: error.message})
        return

    }
    const user = new User(req.body)
    await user.save()
    res.status(201).send('Usuario registrado')
}


