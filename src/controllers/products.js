
const ProductsModel = require('../models/products')

async function get(req, res) {
    const { id } = req.params

    const obj = id ? { _id: id } : null

    const products = await ProductsModel.find(obj)
    res.send(products)
}

async function post(req, res) {
    const {
        name,
        brand,
        price,
    } = req.body


    const product = new ProductsModel({
        name,
        brand,
        price,
    })

    product.save()

    res.send({
        message: 'sucess'
    })
}

async function put(req, res) {
    const { id } = req.params


    // se for obrigatorio retornar o produto us o esse metodo
    const product = await ProductsModel.findOneAndUpdate({ _id: id }, req.body, { new: true })

    res.send({
        message: 'success',
        product,
    })


    /*  
    UMA FORMA DE FAZER - nao retorna item
    const product = await ProductsModel.findById({ _id: id})
         await product.updateOne(req.body)
     
         res.send({
             message: 'sucess',
             product,
         })  */
}

async function remove(req, res) {
    const { id } = req.params


    const remove = await ProductsModel.deleteOne({ _id: id })

    const message = remove.deletedCount > 0 ? 'success' : 'error'

    res.send({
        message,
    })
}

module.exports = {
    get,
    post,
    put,
    remove
}