console.log('in external js file')

document.write('Javascript Lessons')


//alert('You are in extarnal js')
//prompt('Hello I am in js')
//confirm('Are you sure to exit?')

let email="lucaslucifer8102002@gmail.com"
console.log(email)

email="admin@hostmyanmar.net"
console.log(email)

var name="Zeyar Min Oo"
document.write(name)

var name="Kywe Kywe Myint"
document.write(name)

const pi=3.14
console.log("value of pi is"+pi)

//pi=3.142
//console.log("new value of pi is"+pi)


let age=20
let salary=500000
let interest_rate=0.2

console.log(typeof(name))
console.log(typeof(age))
console.log(typeof(interest_rate))

let status=confirm('Are you sure to delete?')
console.log(status)
console.log(typeof(status))

let message;
//console.log(massage)
//console.log(student)

let marks=null
console.log(marks)

//const btn=document.getElementById('closebtn')
//btn.innerHTML="Close"

let subjects=["Maths","Eng",'PHP','JS','BS']
console.log(subjects[0])

let employees=['Lucas',20,'Lucas@gmail.com','sg']
console.log(employees.length)

let products=[
    ['001','Noodle',500,15],
    ['002','Water bottle',400,20],
    ['003','Tissue',100,20],
]

console.log(products.length)
console.log(products[1][1])

let students=[
    ['Mg Mg',18,'Mdy','IT'],
    ['Thiri',17,'Ygn','Civil'],
    ['Tun Tun',20,'Tgi','EC'],

]
console.log(students.length)
console.log("Total number of students="+students.length)

let product=['004','lipstick',5000,3]
products.push(product)
console.log(products)
products[5]=product;
console.log(products)
products[products.length]=product
products.pop();
console.log(products)
products.pop();
products.pop();