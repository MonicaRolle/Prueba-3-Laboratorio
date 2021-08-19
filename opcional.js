const empleado = {
    bruto: 14500,
    hijos: 2,
    pagas: 14,
};

var salarioNeto;

function hijos() {
    switch (empleado.hijos) {
        case 0:
            return 0;
        default:
            return 0.02;
    }
}

function salario() {
    if (empleado.bruto < 12000) {
        return empleado.bruto
    } else if (empleado.bruto >= 12000 && empleado.bruto < 24000) {
        return salarioNeto = empleado.bruto - (empleado.bruto * (0.08 - hijos()));
    } else if (empleado.bruto >= 24000 && empleado.bruto < 34000) {
        return salarioNeto = empleado.bruto - (empleado.bruto * (0.16 - hijos()))
    } else {
        return salarioNeto = empleado.bruto - (empleado.bruto * (0.30 - hijos()))
    }
}

function salarioMensual() {
    switch (empleado.pagas) {
        case 12:
            return salario() / 12;
        case 14:
            return salario() / 14;
    }
}

console.log("El salario neto anual es: ", salario(empleado), "€");
console.log("El salario neto mensual es: ", salarioMensual(empleado), "€");