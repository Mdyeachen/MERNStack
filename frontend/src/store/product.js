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
        set((state) => ({products : [...state.products, data.data]}))

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
        const data = await res.json();
        set({products : data.data})
    },
    deleteProduct : async (pid) => {
        const res = await fetch (`/api/products/${pid}`, {
            method : "Delete"
        })
        const data = await res.json();

        if(!data.sucess) return {sucess : false, message : data.message};

        set(state => ({products : state.products.filter(product => product._id !== pid)}))
        return {success : true, message : data.message}
    },
    updateProducts : async (pid, updateProduct) => {
        const res = await fetch(`/api/products/${pid}`, {
            method : "PUT",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(updateProduct)
        });

        const data = await res.json();
        if(!data.sucess) return {success : false, message : data.message};
        set(state => ({
            products : state.products.map(product => product._id === pid ? data.data : product)
        }))

        return {success : true, message : data.message}
    }
}))
