let arr=[11,22,33,44,55,66,77,88,99,100]

//display array using for loop

for(const i of arr){
    console.log(`element:${i}`);
}

//for Each
// console.log("Display using for Each()")
// arr.forEach((val,ind,array)=>{
//     console.log(`${val},${ind},${array}`);
// });

//for each simple one line code

arr.forEach(val=>console.log(val));