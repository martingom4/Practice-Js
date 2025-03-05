import { Router } from 'express'
import {body} from 'express-validator'
import { createAccount } from './handlers'

const router = Router()


/* Autenticacion y registro */

router.post('/auth/register',
    body('handle')
        .notEmpty()
        .withMessage('El handle de usuario es requerido'),
    body('name')
        .notEmpty()
        .withMessage('El nombre de usuario es requerido'),
    body('email')
        .isEmail()
        .withMessage('El email no es valido '),
    body('password')
        .isLength({min: 8})
        .withMessage('La contraseña debe tener min 8 caracteres'),
    createAccount)

export default router
