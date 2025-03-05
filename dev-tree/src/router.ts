import { Router } from 'express';

const router = Router()

router.get('/', (req, res) => {
    res.send('Hola mundo con typescript')
})

router.get('/nosotros', (req, res) => {
    res.send('Esto es desde nosotros')
})


export default router 
