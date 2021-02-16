const empleado = {
    bruto: 14500,
    hijos: 2,
    pagas: 14
}

var sueldoNeto;
var sueldoBruto = empleado.bruto;

if(empleado.hijos == 0){
    if (sueldoBruto > 0 && sueldoBruto < 12000) {
        sueldoNeto = sueldoBruto;
        console.log("El salario neto anual es: " + sueldoNeto + " €");
    } else if (sueldoBruto > 12000 && sueldoBruto < 24000) {
        sueldoNeto = sueldoBruto - (sueldoBruto * 0.08);
        console.log("El salario neto anual es: " + sueldoNeto + " €");
    } else if (sueldoBruto > 24000 && sueldoBruto < 34000) {
        sueldoNeto = sueldoBruto - (sueldoBruo * 0.16);
        console.log("El salario neto anual es: " + sueldoNeto + " €");
    } else if (sueldoBruto > 34000 ) {
        sueldoNeto = sueldoBruto - (sueldoBruto * 0.3);
        console.log("El salario neto anual es: " + sueldoNeto + " €");
    }
} else if( empleado.hijos >= 1) {
    if (sueldoBruto > 0 && sueldoBruto < 12000) {
        sueldoNeto = sueldoBruto;
        console.log("El salario neto anual es: " + sueldoNeto + " €");
    } else if (sueldoBruto > 12000 && sueldoBruto < 24000) {
        sueldoNeto = sueldoBruto - (sueldoBruto * 0.06);
        console.log("El salario neto anual es: " + sueldoNeto + " €");
    } else if (sueldoBruto > 24000 && sueldoBruto < 34000) {
        sueldoNeto = sueldoBruto - (sueldoBruto * 0.14);
        console.log("El salario neto anual es: " + sueldoNeto + " €");
    } else if (sueldoBruto > 34000 ) {
        sueldoNeto = sueldoBruto - (sueldoBruto * 0.28);
        console.log("El salario neto anual es: " + sueldoNeto + " €");
    }
}

var sueldoNetoMensual = sueldoNeto/ empleado.pagas;
console.log("El salario neto anual es: " + sueldoNetoMensual + " €")