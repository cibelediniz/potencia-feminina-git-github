function fatorial(n) {
    if (n < 0) throw new Error("O número deve ser não-negativo.");
    if (n === 0 || n === 1) return 1;
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
      resultado *= i;
    }
    return resultado;
  }
  
  module.exports = fatorial;
  