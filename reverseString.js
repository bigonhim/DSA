// This algorithm involves reversing the order of a string 


const reverseString = (string) => {
      let j = string.length - 1;
      let reversed = '';
      while(j >= 0 && j < string.length){
           reversed += string[j];
           j--;
      }
      return reversed;
}

let string = "greatest";
console.log(reverseString(string));
