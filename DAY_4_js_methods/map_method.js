let arr=[11,22,33,44,55,66,77,88,99,100]

//display array using for loop

console.log(arr)

//to print squares of array elements
console.log("Display squares of array elements")
arr.map(value=>value*value).forEach(val=>console.log(val))


//to display squares of even number

console.log("squares of event elements")

arr.filter(val=>val%2==0).map(val=>val*val).forEach(val=>console.log(val))