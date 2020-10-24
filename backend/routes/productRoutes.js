import express from 'express';
import Product from '../models/productModel';
import {getToken} from '../util';

const router = express.Router();

router.get("/", async (req, res) => {
    const products = await Product.find({});
    res.send(products);
})

router.post("/", async (req, res) => {
    const product = new Product({
        name: req.body.name,
        price: req.body.price,
        image: req.body.image,
        brand: req.body.brand,
        category: req.body.category,
        countInStock: req.body.countInStock,
        rating: req.body.rating,
        numReview: req.body.numReview,
        description: req.body.description
    });
    const newProduct = await product.save();
    if (newProduct) {
        return res.status(201).send({message: 'New Product Created', data: newProduct})
    }
    return res.status(500).send({ message: 'Error in creating Product '})
})
export default router