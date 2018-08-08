
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
  
  
  
let input=0;
{//(String(++input) + String(input++))
  let step_1 = input++;
   
