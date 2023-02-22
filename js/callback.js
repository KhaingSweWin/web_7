let students=[
    {"name":"David","major":"IT","year":"first year"},
    {"name":"David","major":"IT","year":"first year"},
    {"name":"David","major":"IT","year":"first year"}
]

function getStudents()
{
    let result="";
    setTimeout(()=>{
        students.forEach(function(student){
        result+='<li>'+student.name+'</li>'
        })
        $('.student').html(result)
    },1000)
    
}

function addStudent(student,callback)
{
    setTimeout(()=>{
        students.push(student)
        callback()
    },2000)
   
    
}
getStudents();
addStudent({"name":"Thiri","major":"IT","year":"second year"},getStudents)
