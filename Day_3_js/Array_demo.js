// array by []
const my_arr=[]
my_arr.push(10)
my_arr.push(12)
console.log(typeof(my_arr))
console.log(my_arr)
console.log(my_arr.length)
my_arr.pop()
console.log(my_arr)

// array creation by new Array()
console.log("By new Array()")
const new_array=new Array()
new_array.push(10)
new_array.push(20)
new_array.push(30)
new_array.push(40)
new_array.push(50)
new_array.push(60)
console.log(new_array)
new_array.splice(1,0,11)
console.log(new_array)
new_array.splice(0,1)
console.log(new_array)
new_array.pop()
console.log(new_array)


// array iteration 

// by for loop
console.log("by for loop")
for(let i=0;i<new_array.length;i++){
    console.log(`array[${i}]=${new_array[i]}`)
}

//by for of loop
console.log("BY for of loop")
for(let ele of new_array){
    console.log(`element :${ele}`)
}

// by for each loop

console.log("By for in loop")
for(const i in new_array)
{
     console.log(`key :${new_array[i]}`)
}


// Array of functions
const funct_arr=[(n1,n2)=>{return n1+n2},(n1,n2)=>{return n1-n2}]

console.log(funct_arr[0](12,3))
console.log(funct_arr[1](12,3))


//Element accessing via index and at() method

console.log(funct_arr[0])
console.log(funct_arr.at(-2))