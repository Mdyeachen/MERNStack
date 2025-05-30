import { create } from 'zustand'

export const useProductStore = create((set) => ({
    products : [],
    setProducts : (products) => set({products}),
    createProduct : async (newProduct) => {
        if(!newProduct.name || !newProduct.price || !newProduct.image){
            return {
                sucess : false,
                message : "Please Fill in all fields"
            }
        }

        const res = await fetch(`http://localhost:5000/api/products/`)
    }
}))
