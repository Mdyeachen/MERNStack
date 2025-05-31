import { create } from 'zustand'

export const useProductStore = create((set) => ({
    products : [],
    setProducts : (products) => set({products}),
    createProduct : async (newProduct) => {
        if(!newProduct.name || !newProduct.price || !newProduct.image){
            return {
                success : false,
                message : "Please Fill in all fields"
            }
        }

        const res = await fetch(`/api/products/`, {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body:JSON.stringify(newProduct)
        })
        const data = await res.json();
        set((state) => ({products : [...state.products, data.date]}))

        if(res.ok){
            return {
                success : true,
                message : "Product Create successfully"
            }
        } else {
             return {
                success : false,
                message : "Error to Create successfully. Try later"
            }
        }
        
        
    },
    fetchProduct : async () => {
        const res = await fetch("/api/products/");
        const date = await res.json();
        set({products : date.data})
    }
}))
