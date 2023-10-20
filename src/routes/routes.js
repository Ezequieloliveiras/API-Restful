const router = require('express').Router()
const ProductsController = require('../controllers/products')

// VERBOS HTTP - 4 TIPOS
// GET - obter dados
// POST - enviar/receber dados
// PUT - atualizar dados
// DELETE - remover dados

router.get('/products/:id?', ProductsController.get)
router.post('/products', ProductsController.post) // recebe dados e cadastra
router.put('/products/:id', ProductsController.put)
// router.delete('/products:id', ProductsController.delete)

module.exports = router