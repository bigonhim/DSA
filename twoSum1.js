//Two sum what it does is to look for two numbers in an array that can be added and thus sum up to the target value

// -> This form of twoSum is for a sorted array please

const arr = [1,2,3,4,5,6,9];
const twoSum = (arr,target) => {

    let left = 0;
    let right = arr.length - 1;

    while(left < right){
    sum = arr[left] + arr[right]
    if(sum === target){
       return true;
    }
    if(sum < target){
       left++;
    }
    else{
       right--;
    }
    }
    return false;
}

console.log(twoSum(arr,25))