import path from "path";
import ProductManager from "./Desafios/managers/ProductManager.js";

let managers = new ProductManager("./Desafios/files/products.json")

const productManager = async() => {
    try {
       // await managers.addProduct("buzo", "buzo negro", 12, "/imagen", 5, 1 )
       // await managers.addProduct("remera", "remera blanca", 5, "/imagen", 4, 2)
        // console.log("productos agregados con exito")
        let products = await managers.getProduct()
        console.log(products)
        //let product = await managers.getProductById(1)
        //products = await managers.updateProduct(1, "nombre","remera")
        //console.log(products)
        await managers.deleteProduct(1)
        let productos = await managers.getProduct()
        console.log(productos)

    } catch (error) {
        console.log(error)
    }
} 

productManager()