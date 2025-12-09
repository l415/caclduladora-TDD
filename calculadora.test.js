// calculadora.test.js
const { sumar, restar, multiplicar, dividir, raizCuadrada, exponencial } = require('./calculadora');

describe('Pruebas de la Calculadora', () => {
    // ... (Las pruebas anteriores se mantienen igual, las resumo aquí) ...
    test('Debe sumar dos números reales correctamente', () => {
        expect(sumar(2, 2)).toBe(4);
    });
    test('Debe restar dos números reales correctamente', () => {
        expect(restar(5, 2)).toBe(3);
    });
    test('Debe multiplicar dos números reales correctamente', () => {
        expect(multiplicar(4, 2)).toBe(8);
    });
    test('Debe dividir dos números reales correctamente', () => {
        expect(dividir(10, 2)).toBe(5);
    });

    // --- NUEVAS PRUEBAS ---

    test('Debe calcular la raíz cuadrada con precisión de 10^-3', () => {
        // Raíz de 9 es 3
        expect(raizCuadrada(9)).toBeCloseTo(3, 3); 
        // Raíz de 2 es aprox 1.414...
        expect(raizCuadrada(2)).toBeCloseTo(1.414, 3);
    });

    test('Debe calcular la exponencial (e^x) con precisión de 10^-3', () => {
        // e^0 = 1
        expect(exponencial(0)).toBeCloseTo(1, 3);
        // e^1 = 2.718...
        expect(exponencial(1)).toBeCloseTo(2.718, 3);
    });
});