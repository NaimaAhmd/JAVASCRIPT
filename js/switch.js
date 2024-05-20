//{
   // let h = 21 

 //   switch(h){
   //     case 3:
           // console.log("is divisible by 3")
          //  break
     //   case 6:
       //     console.log("is divisilble by 6")
       //     break
       // default:
      //      console.log("is not found")
    //}
//}
// { 
//    //  }   
// }
// {
//   let maths = "pass";
//   let english = "fail";
//   let chemistry = "fail";
//   let physics = "pass";
//   let kiswahili = "fail";
//   // computer science: maths or pass one of the languages
//   // journlism: pass maths, english and kiswahili
//   // engineer: maths, one of the languages and pass physics\
//   // medicine: pass maths, pass one of the languages and pass chemistry
//   //what happens if someone passes all subjects -> output of: you can chooose a course of your choice.
//   // you are not able to do any course
// }
{
  let maths = "pass";
  let english = "fail";
  let chemistry = "fail";
  let physics = "pass";
  let kiswahili = "fail";

  if (maths == "pass" && english == "pass" && chemistry == "pass" && physics == "pass" && kiswahili == "pass"){
    console.log("You qualify for all the courses")
  }else if(maths == "pass" && (english == "pass" || kiswahili == "pass") && (physics == "pass" || chemistry == "pass")){
    console.log("Computer Science")
  }else if (maths=="pass" && ( english=="pass"&& kiswahili)){
    console.log( "journlism")
  }else if(maths=="pass"&& physics=="pass"&&  english=="pass"||kiswahili=="pass"){
    console.log("Engineer")
  }else if(maths=="pass"&&  chemistry=="pass"&&(english=="pass"||kiswahili=="pass")){
    console.log("medicine")
  }else{
    console.log("you not able to do any course")
  }

}                                                                                                                                                    
  