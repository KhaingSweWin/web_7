$(document).ready(function(){
    
    let xhr=new XMLHttpRequest();

    xhr.open('get','data/data.txt',true);

    xhr.send();

    xhr.onload=function(){
        console.log(xhr.status)
        console.log(xhr.readyState)
        if(xhr.status!=200)
        {
            alert("Error in connection")
        }
        else{
            console.log(xhr.responseText)
            if(xhr.responseText>50)
            {
                alert('Greater than 50')
            }
            else{
                alert('less than 50')
            }
        }
        $('.guess').on('click',function(){
            if($('#guess').val()==xhr.responseText)
            {
                alert("It is equal")
            }
            else{
                alert("It is not equal")
            }
        })
    }
    let xhr2=new XMLHttpRequest();

    xhr2.open('get','data/data.xml',true);

    xhr2.send();

    xhr2.onload=function(){
        console.log(xhr2.responseXML)
        let student=xhr2.responseXML;
        console.log(student.getElementsByTagName('name')[0].innerHTML)
    }
    let xhr3=new XMLHttpRequest();

    xhr3.open('get','data/students.xml',true)
    xhr3.send()
    xhr3.onload=function(){
        let students=xhr3.responseXML;
        let list=students.getElementsByTagName('student');
        console.log(list)
        for(let index=0;index<list.length;index++)
        {
            console.log(list[index].querySelector('name').innerHTML)
            $('.students').append('<tr>')
            $('.students').append('<td>'+list[index].querySelector('name').innerHTML+'</td>')
            $('.students').append('<td>'+list[index].querySelector('age').innerHTML+'</td>')
            $('.students').append('<td>'+list[index].querySelector('address').innerHTML+'</td>')
            $('.students').append('</tr>')
        }
    }
})