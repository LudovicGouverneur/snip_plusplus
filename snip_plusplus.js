
let input=0;
(String(++input) + String(input++)) + Number(String(input++) + String(++input))
  //left
  
  // input:(num,0)
  //1 ++input
  // input:(num,1)
  //2 String(input)
  /  (str,"1")
  //3 ++ input
     input:(num,2)
  //4 String(input)
     (num,"2")
  //5 ()
  
  //right
  //6 input++
  //7 String()
  //8 ++ input
  //9 String()
  //10 ()
  //11 Number()
  

// stil have to add the comment with each step expected value
   
// ideal for python tutor
let input=0;
let output = 0;
let expected = "1124";
console.log("(String(++input) + String(input++)) + Number(String(input++) + String(++input))");
console.log("- " + input + " should become " + "1124");

{ // (String(++input) + String(input++)) + Number(String(input++) + String(++input))
  
  const step_1 = ++input;
  const step_2 = String(step_1);
  const step_3 = input++;
  const step_4 = String(step_3);
  const step_5 = step_2+step_4;          
  const step_6 = input++;
  const step_7 = String(step_6);
  const step_8 = ++input;
  const step_9 = String(step_8);
  const step_10 = step_7+step_9;
  const step_11 = Number(step_10);
  const step_12 = step_5 + step_10;
      output = step_12;
};


console.log("- actual: " + output );


// empty trace-block 
//	for studying different input/output pairs

// { //  (___, ___) -> (#, ___)
// 	const step_1 = String(input); 
// 	// str: ___
// 	const step_2 = step_1.replace("12", ""); 
// 	// str: ___
// 	const step_3 = Number(step_2);
// 	// num: ___
// 	output = step_3;
// };
