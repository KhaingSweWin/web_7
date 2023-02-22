document.querySelector('.col1').innerHTML+="<h2>To Do List</h2>";
let todos=["go to PHP class","go to future","high with weed"];
let todolist=document.querySelector('#todolist')
for(let index=0;index<todos.length;index++)
{
    todolist.innerHTML+="<li class='item'>"+todos[index]+"</li>"
}
let items=document.querySelectorAll('.item');
console.log(document.querySelector(".item:first-child"))
console.log(document.querySelector(".item:last-child"))
console.log(document.querySelector(".item:nth-child(2)"))

todolist.firstElementChild.style.backgroundColor='red'

let firstchild=todolist.firstElementChild;
console.log(firstchild.nextElementSibling.nextElementSibling.previousElementSibling)

firstchild.setAttribute('id','first');
document.querySelector('.col1').setAttribute('id','col1')

console.log(document.querySelector('.col1'))

let div=document.createElement('div')
div.classList.add('col-md-6');

let row=document.querySelector('.row')
row.appendChild(div)

div.setAttribute('id','col2')



function clickMe()
{
    alert("Click Me!!!")
}
let addbtn=document.querySelector('#add')
addbtn.onclick=function()
{
    let img=document.createElement('img')
img.setAttribute('src','images/Bagan,_Burma.jpg');
img.setAttribute('width','100%');
img.setAttribute('height','200px' )

div.appendChild(img)
}

let deletebtn=document.querySelector('#delete')
deletebtn.addEventListener('click',function(){
    let row=document.querySelector('.row')
    let div=document.querySelector('.#col2')
row.removeChild(div)
})