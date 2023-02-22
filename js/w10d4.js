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

function addStudent(student,callback)
{
    setTimeout(function(){
        students.push(student)
        callback();
    },2000)
    
}

addStudent({"name":"Win Win","Major":"E-major","Year":"Third year"},getStudents)