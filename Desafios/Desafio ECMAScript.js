class ProductManager {
    #precioBaseGanancia = 0.15;

    constructor() {
        this.productos = [];
    }

    getProductos () => {
        return this.productos;
    }

    agregarProducto = 
    (nombre, descripcion, precio, thumbnail, codigo, stock = 50 ) =>  {
        const producto = {
            nombre,
            descripcion,
            precio,
            thumbnail,
            codigo,
            stock
        };
    };

    if (this.productos.lenght === 0) {
        producto.id = 1;
    }; else {
        productos.id = this.productos[this.producto.lenght - 1].id + 1;
        this.productos.push(productos)
    };
};