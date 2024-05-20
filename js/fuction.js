 


 

// Course requirements
// if (computerScienceReq)  (maths === "pass") && (english === "pass" || kiswahili === "pass");
//else journalismReq = maths === "pass" && english === "pass" && kiswahili === "pass";
 //engineeringReq = maths === "pass" && (english === "pass" || kiswahili === "pass") && physics === "pass";
//const medicineReq = maths === "pass" && (english === "pass" || kiswahili === "pass") && chemistry === "pass";

//if(computerscienceReq||journalismReq||engineeringReq||medicineReq ){
 // console.log("you can choose a course of your choice")
//} else {
 // console.log("You are not able to pursue any specific course.");

//

//}if(maths=="pass"&&english=="pass"&&kiswahili=="pass"&&chemistry=="pass"&&physics=="pass"){
  //console.log("you can choose a course of your choice.")
//}

//(maths=="pass" && english =="pass" || kiswahili=="pass"&& geography=="pass"&&physics=="pass") 
//console.log(computer_Science_criteria)
 //journalism_criteria=(maths  && (english || kiswahili));
   //engineering_criteria = maths && (english || kiswahili ) && (geoggraphy||history) ;
  //medicine_criteria= maths && (english  || kiswahili) && chemistry( geography||history) ;

//if (computer_Science_criteria || journalism_criteria || engineering_criteria || medicine_criteria) {
  //console.log("You can choose a course of your choice!");
//} else {
 // console.log("You are not able to pursue any specific course.");
//}

 
 


{
  function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
           // or
          // count=count+1

        }
    }
    
    return count;
}

   console.log(countVowels ("zindua")); // Output: 3

}


 

// Run the function with the example array
calculateAverageMarks(arrayOfStudents);



{
  function calculateAverageMarks(students) {
    // Calculate average marks for each student
    let averages = [];
    students.forEach(student => {
        let totalMarks = student.marks.reduce((acc, curr) => acc + curr, 0);
        let average = totalMarks / student.marks.length;
        averages.push({ name: student.name, average: average });
    });

    // Sort students by average marks in descending order
    averages.sort((a, b) => b.average - a.average);

    // Print students' names and their average marks
    averages.forEach(student => {
        console.log(`${student.name}: ${student.average.toFixed(2)}`);
    });
}

// Example usage:
const students = [
    { name: "kamau", marks: [90, 82, 78, 69, 50] },
    { name: "jane", marks: [89, 70, 57, 49, 30] },
    { name: "alex", marks: [95, 80, 75, 78, 35] },
    { name: "lisa", marks: [70, 65, 50, 42, 38] },
    { name: "arisa", marks: [68, 72, 65, 80, 75] }
];

calculateAverageMarks(students);

}

 