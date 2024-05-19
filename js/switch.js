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

// Course requirements
 if (computerScienceReq) = (maths === "pass") && (english === "pass" || kiswahili === "pass");
else journalismReq = maths === "pass" && english === "pass" && kiswahili === "pass";
 engineeringReq = maths === "pass" && (english === "pass" || kiswahili === "pass") && physics === "pass";
const medicineReq = maths === "pass" && (english === "pass" || kiswahili === "pass") && chemistry === "pass";

if (computerScienceReq || journalismReq || engineeringReq || medicineReq) {
  console.log("You can choose a course of your choice!");
} else {
  console.log("You are not able to pursue any specific course.");
}

}                                                                                                                                                    
  { check_qualification(subjects)}
   
    
   //  Define the criteria for each course
   // compute_science_criteria = {"maths", "language", "physics", "chemistry"}
   // journalism_criteria = {"maths", "english", "kiswahili", "humanities"}
   // engineering_criteria = {"maths", "language", "humanities", "physics", "chemistry"}
   // medicine_criteria = {"maths", "language", "chemistry", "humanities"}
    
  {"Check qualification for each course"}


       if (computer_Science_criteria ) (maths && english  || kiswahili&& geography&&physics);
        return journalism_criteria=(maths  && english || kiswahili );
       return  engineering_criteria = maths && (english || kiswahili ) && (geoggraphy||history) ;
        return medicine_criteria= maths && (english  || kiswahili) && chemistry( geography||history) ;
        
        if (computer_Science_criteria || journalism_criteria || engineering_criteria || medicine_criteria) {
          console.log("You can choose a course of your choice!");
        } else {
          console.log("You are not able to pursue any specific course.");
        }

 
