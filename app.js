//Calcular precio total: 

const product = { count: 4, price: 12.55, type: "maquillaje"}
const product1 = { count: 2, price: 15.87, type: "alimentacion"}
const product2 = { count: 1, price: 19.95, type: "libro"}

let precioTotalSinIva;

function getTotal(){
    if(product.count <= 0){
        precioTotalSinIva = 0;
        console.log(precioTotalSinIva)
    } else if( product.count > 0){
        precioTotalSinIva = product.count * product.price;
        console.log("EL precio toal sin iva es: " + precioTotalSinIva);
    }
};

getTotal();

//Calcular el IVA (21%, alimentación 10%, libro 4%)
// Mostrar por consola
function getVat(){

    let precioIva;

    switch( product.type){
        case "ropa":
            precioIva = precioTotalSinIva + (precioTotalSinIva*0.21);
            console.log("El precio total de la ropa con Iva incluido es: " + precioIva);
        break;
        case "alimentacion":
            precioIva = precioTotalSinIva + (precioTotalSinIva*0.1);
            console.log("El precio total de la alimentación con Iva incluido es: " + precioIva);
        break;
        case "libro":
            precioIva = precioTotalSinIva + (precioTotalSinIva*0.04);
            console.log("El precio total de los libros con Iva incluido es: " + precioIva);
        break;
        default:
            precioIva = precioTotalSinIva + (precioTotalSinIva*0.21);
            console.log("El precio total del producto con Iva incluido es: " + precioIva);
    }

}

getVat(product);





