let arr=[11,22,33,44,55,66,77,88,99,100]

//display array using for loop

for(const i of arr){
    console.log(`element:${i}`);
}

//display even numbers

console.log("Even numbers in array");

arr.filter((value,index,arr)=>{
    return value%2==0;
}).forEach(value=>console.log(value))


//odd numbers

console.log("Display odd numbers")
arr.filter(val=>val%2!=0).forEach(value=>console.log(value))