const ProductManager = require("./ProductManager");

const manager = new ProductManager("./src/output/listaProductos.json");

// Agregar productos
manager.addProduct('Pava Electrica', 'una pava que hierve el agua en solo 2 minutos', 10000, ["Imagen no Disponible", "linkDeImagen.com"], "abc123", 25, true, "pava")
manager.addProduct('Celular', 'celular de gama media', 100000, ["Imagen no Disponible", "linkDeImagen.com"], "fgh456", 10, true, "celular")
manager.addProduct('Teclado', 'teclado QWERTY estandar', 8000, ["Imagen no Disponible", "linkDeImagen.com"], "jkl789", 35, true, "teclado")
manager.addProduct('Teclado marca X', 'teclado de la marca X', 18000, ["Imagen no Disponible", "linkDeImagen.com"], "zxc101", 20, true, "teclado")
manager.addProduct('Celular marca X', 'celular de la marca X', 58000, ["Imagen no Disponible", "linkDeImagen.com"], "vbn111", 5, true, "celular")
manager.addProduct('Pava Electrica marca X', 'pava electrica de la marca X', 18000, ["Imagen no Disponible", "linkDeImagen.com"], "mlp121", 9, true, "pava")
manager.addProduct('Linterna', 'linterna de hogar estandar', 5000, ["Imagen no Disponible", "linkDeImagen.com"], "nko131", 50, true, "linterna")
manager.addProduct('Linterna marca X', 'linterna de la marca X', 9500, ["Imagen no Disponible", "linkDeImagen.com"], "bji141", 25, true, "linterna")
manager.addProduct('Teclado marca Z', 'teclado de la marca Z', 13500, ["Imagen no Disponible", "linkDeImagen.com"], "vhu151", 3, true, "teclado")
manager.addProduct('Celular marca X', 'celular de la marca z', 155000, ["Imagen no Disponible", "linkDeImagen.com"], "cgy161", 7, true, "celular")


// ------> Ejemplo de un Producto con insuficientes datos
// manager.addProduct('Mouse', 'mouse estandar', 7000, "Imagen no Disponible")

// ------> Ejemplo de un Producto repetido
// manager.addProduct('Pava Electrica', 'una pava que hierve el agua en solo 2 minutos', 10000, "Imagen no Disponible", "abc123", 25)

// ------> Buscar producto a traves de su ID
// let findProductId = 2; 
// let findProduct = manager.getProductById(findProductId);

// if (findProduct) {
//     console.log("Producto encontrado:", findProduct);
// } else {
//     console.error(`Error, no existe un producto con la ID ${findProductId}.\n`);
// }


// ------> Actualizar producto usando su ID

// manager.updateProduct(2, {
//     price: 120000,
//     stock: 7,
// });

// manager.updateProduct(3, {
//     name: "Teclado marca X",
//     desc: "Teclado premium de la marca X",
//     price: 12000,
//     stock: 20,
// });

// ------> Borrar un producto a traves de su ID

// manager.deleteProduct(1);
