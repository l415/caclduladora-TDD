// calculadora.test.js
const { sumar } = require('./calculadora');

describe('Pruebas de la Calculadora', () => {
    test('Debe sumar dos números reales correctamente', () => {
        expect(sumar(2, 2)).toBe(4);
        expect(sumar(5.5, 2.1)).toBe(7.6);
    });
});

// calculadora.js
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

module.exports = { sumar, restar, multiplicar, dividir };