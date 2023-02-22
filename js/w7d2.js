let num=[]
for(let index=0;index<10;index++)
{
    num[index]=index+1
    console.log(num[index])
}

let students=[
    ['David','IT','Third Year'],
    ['Thiri','CS','Second Year'],
    ['Hnin Hnin','Civil','Second Year']
]

for (let row=0;row<students.length;row++)
{
    console.log(students[row])
    for(let col=0;col<students[row].length;col++)
    {
        console.log(students[row][col])
    }
}

let invoice=[
    ['noodle',450,12],
    ['books',1200,20],
    ['shoes',1,23000]
]

let total=0;
for (let row=0;row<invoice.length;row++)
{
    let subtotal=0;
    subtotal=invoice[row][1]*invoice[row][2];
    console.log("Sub total is "+ subtotal);
    total+=subtotal;
    
}
console.log("Total cost is "+ total)

let even=0;
let odd=0;

let numbers=[34,56,77,197,453,89,120];
for(let i=0;i<numbers.length;i++)
{
    if(numbers[i]%2==0)
    {
        even++;
    }
    else{
        odd++;
    }
}
console.log(`even is ${even} and odd is ${odd}`)

for (const item of numbers) {
    console.log(item)
}

for (const products of invoice) {
    console.log(products)
    for(const item of products) {
        console.log(item)
    }
}

numbers.forEach(
    element => {
        console.log(element)
    }
)

for (const key in numbers) {
    console.log(`${key} : ${numbers[key]}`)

}

let count=0;
while(count<numbers.length)
{
    console.log(`Count is ${count}: value is ${numbers[count]}`)
    count++;
}

let index=0;
do{
    console.log(invoice[index]);
    index++;
}while(index<invoice.length);

let student={
    firstname:"Zeyar",
    lastname:"Min Oo",
    age:20,
    Address:"MDY"
}

console.log(student.firstname);
console.log(student.lastname)

let hotel={
    Name:"Shwe Htee",
    email:"Shwe@gmail.com",
    contact:"09768347367",
    address:"61x62 107A",
    Total_room:35,
    Booked_room:12,
    checkRooms:function(){
        return this.Total_room-this.Booked_room;
    }
}
console.log(hotel.checkRooms())

let employee={
    Name:"Zey Gyi",
    Age:20,
    Phone:"09792046616",
    Basic_salary:3000000,
    Bonus:500000,
    calNetSalary:function(){
       return this.Basic_salary+this.Bonus;
    }

}
console.log(`Total Salary is ${employee.calNetSalary()}.`)