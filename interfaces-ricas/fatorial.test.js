const fatorial = require('./fatorial');

describe('Testes para a função fatorial', () => {
  test('Calcula o fatorial de 5 corretamente', () => {
    expect(fatorial(5)).toBe(120);
  });

  test('Calcula o fatorial de 0 corretamente', () => {
    expect(fatorial(0)).toBe(1);
  });

  test('Deve lançar erro para número negativo', () => {
    expect(() => fatorial(-1)).toThrow('O número deve ser não-negativo.');
  });
});