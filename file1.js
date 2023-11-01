let arr = [7,2,13,9,1]

function binary_Search(arr, size, val) {
    let low = 0;
    let high = size - 1;
  
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (arr[mid] === val) {
        return mid;
      }
      if (arr[mid] < val) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
    return "not found";
  }
  

for(let i=0; i<5; i++){
    min = i
    for(let j=i+1;j<5;j++){
        if(arr[i]>arr[j]){
            min = j
        }
    }
    temp = arr[min]
    arr[min] = arr[i]
    arr[i] = temp 
}
console.log(arr);
let val = 13
console.log(binary_Search(arr,5,val));