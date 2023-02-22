let inputs=document.querySelectorAll('input[type=radio]')
console.log(inputs)
inputs.forEach(element => {
    element.addEventListener('change',function ()
    {
        getData(element)
    });
});

function getData(item){
    console.log(item.value)
    if(item.value=="custom")
    {
        let pronoun=document.getElementById('pronoun');
        pronoun.classList.remove('d-none')
        pronoun.classList.add('d-block')
        let gender_text=document.getElementById('gender_text')
        gender_text.classList.remove('d-none')
        gender_text.classList.add('d-block')
    }
}
let select=document.getElementById('pro');

select.addEventListener('change',function (){
    console.log(select.value)
})

let date=new Date();
console.log(date)
console.log(date.getDate()-1)

let dateselect=document.getElementById('date')
for(let index=1;index<=31;index++){
    if(date.getDate()-1==index)
    {
        dateselect.innerHTML+="<option value="+index+" selected>"+index+"</option>"
    }
    else
    {
        dateselect.innerHTML+="<option value="+index+">"+index+"</option>"
    }
}

let description=document.querySelector('#description')
description.addEventListener('keyup',function(){
    let text=description.value;
    console.log(text.length)
    let max=300;
    let remaining=max-text.length;
    document.querySelector('.message').innerHTML="Remaining Charactors:"+remaining;
})
