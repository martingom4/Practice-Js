// aca vamos a tener funciones que se van a llamar desde nuestros routers
import type{ Request, Response } from 'express'
import { validationResult} from 'express-validator'
import slug from 'slug'
import User from "../models/Users"
import { hashPassword,checkPassword} from '../utils/auth'

export const createAccount =  async (req: Request, res: Response)=> {


    const {email,password} = req.body
    const userExists = await User.findOne({email}) // pero esto devuelve un null o un objeto

    if (userExists) {
        const error = new Error('El Email ya existe en la base de datos')
        res.status(409).json({error: error.message})
        return
    }
    const handle = slug(req.body.handle, '')
    const handleExists = await User.findOne({handle})
    if (handleExists) {
        const error = new Error('Nombre de usuario no disponible')
        res.status(400).json({error: error.message})
        return
    }

    const user = new User(req.body)
    user.password = await hashPassword(password)
    user.handle = handle

    await user.save()
    res.status(201).send('Usuario registrado')
}

export const login = async(req: Request, res: Response) => {
    let errors = validationResult(req)
    if (!errors.isEmpty()) {
        res.status(400).json({errors: errors.array()})
        return
    }

    const {email,password} = req.body
    // revisar si el usuario esta resgistrado
    const user = await User.findOne({email})
    if (!user) {
        const error = new Error('El usuario no existe')
        res.status(404).json({error: error.message})
        return
    }

    //comprobar el password
    const isPasswordCorrect = await checkPassword(password, user.password)
    if (!isPasswordCorrect) {
        const error = new Error('Contraseña incorrecta')
        res.status(401).json({error: error.message})
        return
    }
    res.status(200).send('Usuario logueado')

}
