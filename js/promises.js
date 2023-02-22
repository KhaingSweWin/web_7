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

function addStudent(student)
{
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            students.push(student)
            const error=true;
            if(!error)
            {
                resolve();
            }
            else
            {
                reject("Error in something");
            }
        },2000)
    })
    
   
    
}
getStudents();
addStudent({"name":"Thiri","major":"IT","year":"second year"}).then(getStudents).catch(error=>console.log(error))
