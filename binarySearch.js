// Implement a Binary search algorithim on an array

//First sort the array because this has to be done before performing the search
const arr = [2, 43, 23, 4, 1, 53];
console.log("Before Sort : ", arr);

const sort = (x) => {
  for (let i = 0; i < x.length; i++) {
    for (let j = 0; j < x.length - 1; j++) {
      if (x[j + 1] < x[j]) {
        let temp = x[j];
        x[j] = x[j + 1];
        x[j + 1] = temp;
      }
    }
  }
  return x;
};
console.log("After Sort : ", sort(arr));

//Implementing a Binary search algorithim to search for the number 2 in the above array after the sort procedure has been completed
// import math
const bs = (arr, x) => {
  let left = 0;
  let right = arr.length - 1;

  //compute the mid element
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === x) {
      return true;
    } else if (arr[mid] < x) {
      left = mid + 1;
    } else if (arr[mid] > x) {
      right = mid - 1;
    }
  }
  return "Item not found";
};

console.log(bs(arr, 51));
