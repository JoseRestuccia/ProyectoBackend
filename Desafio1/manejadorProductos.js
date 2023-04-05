class ProductManager {

    constructor() {
        this.productos = [];
    }

    getProducto = () => {
        return this.productos;
    }

    agregarProducto = 
    (nombre, descripcion, precio, thumbnail,stock, codigo
        ) =>  {
            const producto = {
            nombre,
            descripcion,
            precio,
            thumbnail,
            stock,
            codigo,
    };
        if (this.productos.length === 0) { //estaba mal escrito length
            producto.id = 1;
        }
        else {
            producto.id = this.productos[this.productos.length - 1].id + 1;//estaba escrito lenght en vez de lenght
        };

        const codigoRegistrado = this.productos.findIndex(producto => producto.codigo === codigo)
        if(codigoRegistrado != -1){
            console.log("El codigo ya existe, ingrese uno nuevo")
            return;
        };
        if(!nombre || !descripcion || !precio || !thumbnail || !stock || !codigo ) {
            console.log("Todos los campos son obligatorios")
            return
        }
            this.productos.push(producto)  
  };
   
  getProductById = (id) => {
    const productoEncontrado = this.productos.findIndex(producto => producto.id === id)
    if(productoEncontrado === -1){
        console.log("Producto NOT FOUND")
        return;
    } 
    console.log("Producto encontrado", this.productos [productoEncontrado]);
  }
};

// prueba
const manejadorProductos = new ProductManager();

// Agrego producto
manejadorProductos.agregarProducto("Buzo negro","buzo negro", 1500, "/imagen", 50, 1);
manejadorProductos.agregarProducto ("Remera", "remera blanca", 500, "/imagen", 30, 2);
console.log(manejadorProductos.getProducto());

// producto repetido//
manejadorProductos.agregarProducto("Buzo negro","buzo negro de altisima calidad", 1500, "/imagen", 50, 1);

// producto con campo vacio //
manejadorProductos.agregarProducto("Buzo negro", 1500, "/imagen", 50, 1);

// uso el getProductById //
manejadorProductos.getProductById(1);
manejadorProductos.getProductById(25); //NOT FOUND//
