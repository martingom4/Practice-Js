import { Router } from 'express'
import User from './models/Users'

const router = Router()


/* Autenticacion y registro */

router.post('/auth/register', async (req,res) => {
    const user = new User(req.body)

    await user.save()

    res.send('Usuario registrado')
})

export default router
