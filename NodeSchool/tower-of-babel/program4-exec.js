let arg1 = process.argv[2];
let arg2 = process.argv[3];
import {PI, sqrt, square} from './program4-module';

console.log(PI);
console.log(sqrt(+arg1));
console.log(square(+arg2));