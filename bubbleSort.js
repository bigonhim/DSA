// I am going to implement a bubble sort algorithm in javascript! - Wow

const arr = [34,54,3,4,56,7,2,1];

const bSort = (x) =>{
    for(let i = 0; i < x.length; i++){
    for(let j = 0; j < x.length - 1; j++){
        if(x[j] > x[j + 1]){
            const temp = x[j];
            x[j] = x[j+1];
            x[j+1] = temp;
        }
    }
    }
    return x;
}

console.log("Before Sort: ",arr);
console.log("After Sort: ",bSort(arr));