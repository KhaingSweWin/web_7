let students=[
    {"name":"David","Major":"Physics","Year":"Second year"},
    {"name":"David","Major":"Physics","Year":"Second year"},
    {"name":"David","Major":"Physics","Year":"Second year"},
    {"name":"David","Major":"Physics","Year":"Second year"}
]

function getStudents(){
    setTimeout(function(){
        let result="";
    students.forEach(student => {
        result+="<li>"+student.name+"</li>"
    });
    $('.student').html(result)
    },1000)
    
}

getStudents();

function addStudent(student)
{
return new Promise(function(resolve,reject){
    setTimeout(()=>{
        students.push(student);

        let error=false;
        if(!error)
        {
            resolve();
        }
        else
        {
            reject("Something happened wrong");
        }
    },2000)
})      
    
}

addStudent({"name":"Win Win","Major":"E-major","Year":"Third year"}).then(getStudents).then(function(){
    alert("Hello")
}).catch(error=>console.log(error)).finally(function(){
    console.log("complete")
});