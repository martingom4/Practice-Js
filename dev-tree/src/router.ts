import { Router } from 'express'
import {body} from 'express-validator'
import { createAccount, login} from './handlers'
import { handleInputErrors } from './middleware/validation'

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
    handleInputErrors,
    createAccount)


router.post('/auth/login',
    body('email')
        .isEmail()
        .withMessage('El email no es valido '),
    body('password')
        .notEmpty()
        .withMessage('La contraseña es obligatoria'),
    login)
export default router
