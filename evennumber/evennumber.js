let arr = [1,4,6,8,16,19,23,25,28,29];
let even = [];

for(let i = 0; i<arr.length; i++){
    if(arr[i]%2==0){
        even.push(arr[i]);
    }
}

document.write(even);