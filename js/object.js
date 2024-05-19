{
    const car ={
        type:"nissam",
        color:"blue",
        model:"y785"
    }

    const car2={
        type:"honda",
        color:"white",
        model:"b453"
    }
}
{
    const person1={
        firstname:"mia",
        lastname:"kim",
        age:"21"

    }

    const person2={
        fisrtname:"mary",
        lastname:"otti",
        age:"30"
    }

}

   // fullname:function(){
   // console.log(object.fname+""+object.lname)
   //}
{
    const person={
        fname:"faiza",
        lname:"wavula",
        yob:2002,
        fullname:function(){
            console.log(this.fname +"age"+this.lname)
        },
        age: function(currentYear){
            return currentYear-this.yob
        }
    }
    console.log(person.age(2029))
}
