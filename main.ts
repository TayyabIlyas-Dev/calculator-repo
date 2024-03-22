#! /usr/bin/env node



import inquirer from "inquirer";

const answer = await inquirer.prompt([
            {message:"write firstNumber",
             type:"number",
             name:"firstnumber"
      }, 
            {message:"write secondNumber",
             type:"number",
             name:"secondnumber"
      },
            {message:"choose operation",
             type:"list",
             name:"operator",
             choices:["Addition","Subtration","Multiplication","Divide"]
      },
]);               
//            lets play with conditions

// condition statement


if(answer.operator === "Addition"){
      console.log(answer.firstnumber + answer.secondnumber);
}
else if(answer.operator === "Subtration"){
      console.log(answer.firstnumber - answer.secondnumber);
}
else if(answer.operator === "Multiplication"){
      console.log(answer.firstnumber * answer.secondnumber);
}
else if(answer.operator === "Divide"){
      console.log(answer.firstnumber / answer.secondnumber);
}
else{
      console.log("Please select Vaild operator");
      
}



///  we successfully build a simple calculator that we name it      j17calculator
// now we login to npm  type in terminal   npm login
// then for publish/push  your j17calculator in npm so type    npm publish