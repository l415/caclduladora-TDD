// calculadora.js

// Funciones básicas
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
    if (b === 0) throw new Error("No se puede dividir por cero");
    return a / b;
}

// --- FUNCIONES AVANZADAS (Sin librerías Math) ---

// Método de Newton-Raphson para la raíz cuadrada
function raizCuadrada(numero) {
    if (numero < 0) throw new Error("No existe raíz real de números negativos");
    if (numero === 0) return 0;

    let estimacion = numero; // Empezamos suponiendo que la raíz es el mismo número
    let iteraciones = 20; // Con 20 iteraciones sobra para la precisión requerida

    for (let i = 0; i < iteraciones; i++) {
        // Fórmula: x = (x + n/x) / 2
        estimacion = dividir(sumar(estimacion, dividir(numero, estimacion)), 2);
    }
    
    return estimacion;
}

// Serie de Taylor para la exponencial e^x
function exponencial(n) {
    let resultado = 1; // El primer término de la serie es 1
    let terminoActual = 1; // Valor del término que estamos sumando
    
    // Sumamos los primeros 20 términos de la serie
    for (let i = 1; i <= 20; i++) {
        // El siguiente término se calcula multiplicando el anterior por n y dividiendo por i
        terminoActual = dividir(multiplicar(terminoActual, n), i);
        resultado = sumar(resultado, terminoActual);
    }

    return resultado;
}

module.exports = { sumar, restar, multiplicar, dividir, raizCuadrada, exponencial };