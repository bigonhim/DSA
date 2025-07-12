// What this program does is to take two sorted arrays and combine them into a single array
// This still utilizes the two pointer techniques
// let's Go

const combineArrays = (arr1, arr2) => {

    let finalArray = [];
    let i = 0; 
    let j = 0;

    while(i < arr1.length&& j < arr2.length){    
      if(arr1[i] < arr2[j]){
       finalArray.push(arr1[i]);
       i++;
      }   
      else{
       finalArray.push(arr2[j]);
       j++;
      }
    }
    while(i < arr1.length){
        finalArray.push(arr1[i]);
        i++;
    }
    while(j < arr2.length){
        finalArray.push(arr2[j]);
        j++;
    }

    return finalArray;
}

arr1 = [1,2,3];
arr2 = [4,5,6];

console.log(combineArrays(arr1,arr2));