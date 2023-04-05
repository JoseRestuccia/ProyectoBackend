import fs from "fs";


export default class ProductManager {
    constructor(path){
        this.path = path
    }
    getProduct = async() => {
        try {
            if(fs.existsSync(this.path)) {
                const data = await fs.promises.readFile(this.path, "utf-8")
                const products = JSON.parse(data)
                return products
            } else {
                return []
            }
        } catch (error) {
            console.log(error)
        }
    }

    addProduct = async (nombre, descripcion, precio, thumbnail, stock, codigo) => {
        try {
            const products = await this.getProduct()
            let product = {
                nombre,
                descripcion,
                precio,
                thumbnail,
                stock,
                codigo
            } 
            if(products.length === 0){
                product.id = 1;
            } else{
                product.id =  products[products.length -1].id + 1;
            }
            products.push(product)
            await fs.promises.writeFile(this.path, JSON.stringify(products, null, "\t"))
            return products
        } catch (error) {
            console.log(error)
        }
    }
    getProductById = async (id) => {
        try {
            const products = await this.getProduct()
            const product = products.find(product => product.id === id)
            if(!product){
                console.log("Product NOT FOUND")
            } else {
                console.log(`Producto encontrado ${product.nombre}`)
            }
            return product
        } catch (error) {
            console.log(error)
        }
    }
    updateProduct = async(id, field, value) => {
        try {
            const products = await this.getProduct()
            if(field === "id"){
                return console.log("No se puede modificar el id")
            } 
            const updatedProduct = products.map(prod =>
                prod.id === id ? { ...prod, [field]: value,} : prod);
                await fs.promises.writeFile(this.path, JSON.stringify(updatedProduct, null, '\t'));
                return updatedProduct
        } catch (error) {
            console.log(error)
        }
    }
    deleteProduct = async(id) => {
        try {
            let products = await this.getProduct()
            const product = products.find(product => product.id === id)
            if(!product){
                console.log("Product NOT FOUND")
            }
            products = products.filter(product => product.id !== id)
            await fs.promises.writeFile(this.path, JSON.stringify(products, null, "\t"))
            return products
        } catch (error) {
            console.log(error)
        }
    }
};