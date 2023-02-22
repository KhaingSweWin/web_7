let hotel=new Hotel()

function Hotel(){
    this.name="Sedona"
    this.address="Yangon";;
}

console.log(hotel.name)
console.log(hotel.address)

hotel.rooms=200;
console.log(hotel.rooms)

hotel.checkrooms=function(){
    console.log(`number of rooms are ${this.rooms}`)
}

hotel.checkrooms();

hotel.checkAvailibitly=function(bookedrooms){
    console.log(`Number of available rooms are ${this.rooms-bookedrooms}`)
}

hotel.checkAvailibitly(75);



function Students(name,email,major,year,marks){
    this.name=name;
    this.email=email;
    this.major=major;
    this.year=year;
    this.marks=marks;
    this.checkGrade=function(){
        let total=0;
        for(let marks of this.marks){

            total+=marks;
        }
        let avg=total/this.marks.length;
        if(avg>=80)
        {
            console.log("A")
        }
        else if(avg>=65)
        {
            console.log("B")
        }
        else if(avg>=50)
        {
            console.log("C")
        }
        else if(avg>=0)
        {
            console.log("D")
        }
    }
}
let student1=new Students("David","david@gmail.com","Physics","Second year",[78,88,90])
console.log(student1.checkGrade())



