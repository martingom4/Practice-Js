import type{ NextFunction, Request, Response } from 'express'
import { validationResult} from 'express-validator'

export const handleInputErrors = (req: Request, res: Response, next: NextFunction) => {
    //manejo de errores
    let errors = validationResult(req)
    console.log('desde validation.ts')
    if (!errors.isEmpty()) {
        res.status(400).json({errors: errors.array()})
        return
    }
    next()
}
