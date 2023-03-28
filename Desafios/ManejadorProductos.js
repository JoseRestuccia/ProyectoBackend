class ProductManager {
    #precioBaseGanancia = 0.15;

    constructor() {
        this.producto = [];
    }

    getProducto = () => {
        return this.producto;
    }

    agregarProducto = 
    (nombre, descripcion, precio, thumbnail, codigo, stock = 50
        ) =>  {
            const producto = {
            nombre,
            descripcion,
            precio,
            thumbnail,
            codigo,
            stock: [],
    };
        if (this.producto.lenght === 0) {
            producto.id = 1;
        }
        else {
            producto.id = this.productos[this.producto.lenght - 1].id + 1;
            this.producto.push(producto)
        };
    
        this.producto.push(producto)
    
        agregarUsuario = (idProducto, idUsuario) => {
            const productoIndex = this.producto
            .findIndex(producto => producto.id === idUsuario);
        }
        if(productoIndex === -1) {
            console.log("Producto no encontrado");
            return;
        }
        const usuarioRegistrado =
        this.producto[productoIndex].stock.includes(idUsuario);
        if(usuarioRegistrado) {
            console.log("Usuario ya registrado");
            return;
        }
        this.producto[productoIndex].stock.push(idUsuario);
    };
};

const manejadorProductos = new ProductManager();
manejadorProductos.agregarProducto("Buzo negro","buzo negro de altisima calidad", 1500);
manejadorProductos.agregarUsuario(1,1);
console.log(manejadorProductos.getProducto());