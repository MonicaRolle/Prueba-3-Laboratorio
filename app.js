//Calcular precio total: 

const product = { count: 3, price: 12.55, type: "ropa", }
var pricetotal;
let priceUnit;

//Calcular precio total
var getTotal = (count, price) => pricetotal = count <= 0 ? 0 : (count * price);


function getTotalVat(product) {
    return product.count > 0 ? product.count * getVat() : 0;
}

//Calcular el IVA (21%, alimentación 10%, libro 4%)


function getVat() {
    switch (product.type) {
        case "alimentación":
            return priceUnit = product.price + (product.price * 0.1);

        case "libro":
            return priceUnit = product.price + (product.price * 0.04);

        default:
            return priceUnit = product.price + (product.price * 0.21);
    }
}

//Calcular el total de IVA (IVA por unidad multiplicado por cantidad):

function printProductPrice(product) {
    const subtotal = getTotal(product.count, product.price);
    const vat = getVat();
    const total = getTotalVat(product);

    console.log("Subtotal:", subtotal + "€");
    console.log("IVA:", vat + "€");
    console.log("Total:", total + "€");
}

printProductPrice(product)