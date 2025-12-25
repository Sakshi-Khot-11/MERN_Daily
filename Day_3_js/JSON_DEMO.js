// Json using curly  braces
const data={}
data.name="sakshi"
data["Age"]=21
console.log(data)

// JSON using new object()

const new_data=new Object()
new_data.name="Suraj"
new_data["Age"]=18
new_data.canVote=false
console.log(new_data)

// JSON by constructor function

function Student(name,Age,canVote){
    this.name=name
    this.Age=Age
    this.canVote=canVote

}
let stu1=new Student("sampada",35,true)
console.log(stu1)