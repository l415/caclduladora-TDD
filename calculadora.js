// calculadora.test.js
const { sumar, restar, multiplicar, dividir } = require('./calculadora');

describe('Pruebas de la Calculadora', () => {
    test('Debe sumar dos números reales correctamente', () => {
        expect(sumar(2, 2)).toBe(4);
        expect(sumar(5.5, 2.1)).toBe(7.6);
    });

    test('Debe restar dos números reales correctamente', () => {
        expect(restar(5, 2)).toBe(3);
        expect(restar(2, 5)).toBe(-3);
    });

    test('Debe multiplicar dos números reales correctamente', () => {
        expect(multiplicar(4, 2)).toBe(8);
        expect(multiplicar(2.5, 2)).toBe(5);
    });

    test('Debe dividir dos números reales correctamente', () => {
        expect(dividir(10, 2)).toBe(5);
        expect(dividir(10, 4)).toBe(2.5);
    });
});