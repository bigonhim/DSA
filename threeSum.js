// The program intends to find three unique numbers that when added up together equals to zero! - in an array that is.
//If the array exists then it prints the array of numbers and if it doesn't exist then it prints false!
// This again uses the two pointer approach.


const threeSum = (arr) => {
    let result = [];

    for(let i = 0; i < arr.length; i++){
        if(arr[i] === arr[i+1]){
            continue;
        }
        let left = i + 1;
        let right = (arr.length) - 1;

        while(left < right){
          total = arr[i] + nums[left] + nums[right];
          if(total === 0){
            result.push([arr[i],arr[left],arr[right]]);
            while(left < right && arr[left] === arr[left + 1]){
                left++;
            }
             while(left < right && arr[right] === arr[right - 1]){
                right--;
            }
            left++;
            right--;
          }
          else if(total > 0 ){
            right--;
          }
          else{
            left++;
          }
        }
    }
    return result;
}


nums = [-2, -2, -2, 0, 2]
console.log(threeSum(nums))
