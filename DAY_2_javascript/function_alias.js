function add(n1,n2){
    console.log(`n1+n2 =${n1+n2}`)
}
let myadd=add
myadd(3,4)
myadd(10,11)
console.log(`value at myadd=${myadd} and type of myadd if = ${typeof(myadd)}`)