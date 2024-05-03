// En un archivo llamado 'utils.js'
export function suma(a, b) {
  return a + b;
}


// En otro archivo
import { suma } from "./utils.js";

console.log(suma(2, 3)); // Output: 5



