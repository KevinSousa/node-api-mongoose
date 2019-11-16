const mongoose = require('mongoose');
const Product = mongoose.model('Product');

module.exports = {

    // Método que lista todos os registros do MongoDB
    async index(req, res) {
        const products = await Product.find();

        return res.json(products);
    },

    // Método que lista o registro pelo ID
    async show(req, res) {
        const product = await Product.findById(req.params.id);

        return res.json(product);
    },

    // Método que cadastra um registro no MongoDB
    async store(req, res) {
        const product = await Product.create(req.body);

        return res.json(product);
    },
    
    // Método que atualiza os registros do MongoDB pelo ID
    async update(req, res) {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(product);
    },

    // Método que deleta os registros do MongoDB pelo ID
    async destroy(req, res) {
        await Product.findByIdAndRemove(req.params.id);

        return res.send("Removido com sucesso!!")
    },

};