let marks=[51,40,42,61]

let total_marks=marks[0]+marks[1]+marks[2]+marks[3]
console.log(`total marks is ${total_marks}`)

let avg_marks=total_marks/marks.length
console.log(`Average marks is ${avg_marks}`)

let remainder=total_marks%marks.length
console.log(`Remainder is ${remainder}`)

let exponential=25**5
console.log(`exponential is ${exponential}`)

let num1=document.getElementById(`number1`)


let num2=document.getElementById(`number2`)

let result=document.getElementById(`result`)
result.value=parseFloat(num1.value)+parseFloat(num2.value)

const addbtn=document.getElementById(`add`)
addbtn.addEventListener(`click`,function(){
    result.value=parseFloat(num1.value)+parseFloat(num2.value)
})

const subbtn=document.getElementById(`sub`)
subbtn.addEventListener(`click`,function(){
    result.value=parseFloat(num1.value)-parseFloat(num2.value)
})

const multibtn=document.getElementById(`multi`)
multibtn.addEventListener(`click`,function(){
    result.value=parseFloat(num1.value)*parseFloat(num2.value)
})

const divibtn=document.getElementById(`divi`)
divibtn.addEventListener(`click`,function(){
    result.value=parseFloat(num1.value)/parseFloat(num2.value)
})

const infobtn=document.getElementById(`info`)
infobtn.addEventListener(`click`,function(){
    result.value=parseFloat(num1.value)%parseFloat(num2.value)
})

const expobtn=document.getElementById(`expo`)
expobtn.addEventListener(`click`,function(){
    result.value=parseFloat(num1.value)**parseFloat(num2.value)
})

const resetbtn=document.getElementById(`reset`)
resetbtn.addEventListener(`click`,function(){
    result.value="";
    num1.value="";
    num2.value=""
})


let lessbtn=document.getElementById(`less`)
lessbtn.addEventListener(`click`,function(){
    alert(`num1 is less than num2 ${(parseFloat(num1.value)<parseFloat(num2.value))}`)
})

let greaterbtn=document.getElementById(`greater`)
greaterbtn.addEventListener(`click`,function(){
    alert(`num1 is greater than num2 ${parseFloat(num1.value)>parseFloat(num2.value)}`)
})

let andbtn=document.getElementById(`and`)
andbtn.addEventListener(`click`,function(){
    alert('Num1 is greater than 500 and Num2 is greater than 500' +(num1.value>500)&&(num2.value>500))
})


