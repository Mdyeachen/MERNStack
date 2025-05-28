import express from 'express';
import { getProducts, createProduct, deleteProduct, updateProduct } from '../controllers/product.controller.js';

const router = express.Router()


// GET
router.get('/', getProducts)
// CREATE
router.post('/', createProduct)
// DELETE
router.delete('/:id', deleteProduct)
// UPDATE
router.put('/:id', updateProduct)


export default router;