import mongoose from "mongoose";
import Product from "../models/product.model.js";


// GET ALL
export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({sucess : true, data : products})
    } catch (error) {
        console.error("Error in Fatching Product", error.message);
        res.status(500).json({sucess : false, message : "Server Error"})
    }
}

// CREATE
export const createProduct = async (req, res) => {
    const product = req.body; 

    if(!product.name || !product.price || !product.image){
        return res.status(400).json({message : "Please Fill all the fields", sucess : false})
    }

    const newProduct = new Product(product);

    try {
        await newProduct.save();
        res.status(201).json({sucess : true, date : newProduct})
    } catch (error) {
        console.error(`Error in create product`, error.message )
        res.status(500).json({sucess : false, message : `Internal Server Error`})        
    }
};

// DELETE
export const deleteProduct = async (req, res) => {
    const { id } = req.params;
    
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({sucess : true, message : "deleted product"})
    } catch (error) {
        res.status(500).json({sucess : false, message : "Internal Server Error"})
    }
}

// UPDATE
export const updateProduct = async (req, res) => {
    const { id } = req.params;

    const product = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({sucess : false, message : "Request Id not found"})
    }

    try {
        const updateProduct = await Product.findByIdAndUpdate(id, product, {new:true});
        res.status(201).json({sucess : true, data : updateProduct})
    } catch (error) {
        console.error("Error to update product" , error.message)
        res.status(500).json({sucess : false, message : "Internal Server Errror"})
    }
}