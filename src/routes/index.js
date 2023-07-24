import { Router } from 'express'

const router = Router();

router.get('/', (req, res) => res.render('index', { title: 'First website with node.JS' })); //envia la pagina y la renderiza.

router.get('/about', (refq, res) => res.render('about', {title:'About'})); //envia la pakgina y la renderiza.


router.get('/contact', (req, res) => res.render('contact', {title:'Contact'})); //envia la pagina y la renderiza.

export default router