const producto = 'Camiseta';
const precio = 20;
const cantidad = 3;

// Utilizando template literals para crear una cadena de texto con variables incrustadas
const factura = `Has comprado ${cantidad} ${producto}s. El total a pagar es $${precio * cantidad}.`;

console.log(factura);
// Output: Has comprado 3 Camisetas. El total a pagar es $60.
