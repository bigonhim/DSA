// This program intends to calculate the power of a Number.

const power = (x,y) => {

   let result = 1;
   for(let i = 0; i < y; i++){
    result = result * x;
   }
   return result;

}

console.log(power(5,3))