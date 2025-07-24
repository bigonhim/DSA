//This intends to remove duplicates from a given array to produce an array that has no duplicates - in a sorted array that is.

const removeDuplicates = (arr) => {
        let i = 0;
        let j = i + 1;
        let counter = 0;
        while(j < arr.length && i < arr.length -1 ){
            if(arr[i] === arr[j]){
                while(arr[i] === arr[j]){
                    j++;
                    counter ++;
                }
                arr.splice(i,counter);
                counter = 0;
                i = 0;
                j = i + 1;
            }
            else{
                i++;
                j++;
            }   
        }
        return arr;
}
let arr = [1,1,1,1,2,2,2,2,2,2,2,3,4,4];
console.log(removeDuplicates(arr));

