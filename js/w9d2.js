const event_calender=document.querySelector('.event')
console.log(event_calender)

event_calender.onclick=function(event){
    console.log(event.target)
    console.log(event.target.tagName)
    let element=event.target;
    element.style.backgroundColor="green";
    let input=prompt("Enter Event Name");
    element.innerHTML+="( "+input+" )";
}

const div_box=document.querySelector('.box')
console.log(div_box)

div_box.onclick=function(event){
    let element=event.target;

    if(element.classList.contains('bg_color')){
    element.classList.remove('bg_color')}
    else{
        element.classList.add('bg_color')
    }
}