function add(value){
    if(value<200)
    {
        value=value+10;
        console.log(value)
        add(value++)
    }
    else if(value<300 && value>=200)
    {
        value=value+50;
        console.log(value)
        add(value)
    }
}

add(100)
add(200)

function addition(value)
{
    let promise=new Promise((resolve,reject)=>{
        resolve(value)
    })
    promise.then((value)=>{
        console.log(`${value}: adding 1`)
       
        return value++;
    }).then((value)=>{
        console.log(`${value}: adding 2`)
        return value+2;
    })
    .then((value)=>{
        console.log(`${value}: adding 3`)
        return value+3;
    })
    .then((value)=>{
        console.log(`${value}: adding 4`)
        return value+4;
    })
}

addition(100)
addition(200)