function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    return a / b;
}

// Exportamos todas las funciones para que el test pueda usarlas
module.exports = { sumar, restar, multiplicar, dividir };