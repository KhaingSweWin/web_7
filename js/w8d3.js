/*let firstname=document.querySelector('#firstname')
console.log(firstname)

let form=document.forms[0];
console.log(form.elements.firstname)

firstname.addEventListener('blur',function(){
    
    if(firstname.value=="")
    {
        document.querySelector('#firsterror').innerHTML="Please add First Name";
    }
    else
    {
        document.querySelector('#firsterror').innerHTML="";
    }
})

firstname.addEventListener('blur',function(){
    checkdata(this)
})

let surname=document.forms[0].elements.surname;
surname.addEventListener('blur',function(){
    checkdata(this)
})


function checkdata(item)
{
    console.log(item)
    if(item.value=="")
    {
        let error=item.nextElementSibling;
        error.innerHTML="Please Add "+ item.getAttribute('name');
    }
    else
    {
        let error=item.nextElementSibling;
        error.innerHTML="";
    }
}



function focusData(item){
    let error=item.nextElementSibling;
    error.innerHTML="What is Your "+item.getAttribute('name')+"??";
}

firstname.addEventListener('foucs',()=>{
    focusData(firstname);
})

surname.addEventListener('focus',function(){
    focusData(this);
})
*/
let input=document.querySelectorAll('input')
console.log(input)




