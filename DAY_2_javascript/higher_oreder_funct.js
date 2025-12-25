function executer(fn){
    let val=fn(11,22)
    console.log(`Result in Executer - ${val}`)
}
executer((n1,n2)=>n1+n2)
executer((n1,n2)=>n1-n2)
executer((n1,n2)=>n1/n2)
executer((n1,n2)=>n1*n2)