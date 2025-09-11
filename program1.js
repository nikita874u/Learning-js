//wap to check greater of two number

function greaterNum(num1 , num2){
  if(num1 > num2){
    console.log(`${num1} is greater than ${num2}`);
  }else{
        console.log(`${num2} is greater than ${num1}`);
  }
};
greaterNum(4,6);

//wap to check greater of three number

function greaterOfThree(num1 ,num2, num3){
      if(num1 > num2 && num1 > num3){
        console.log(`${num1} is grater than both numbers i.e ${num2} and ${num3}`);
      }else if (num2 > num3) {
        console.log(`${num2} is greater`)
      }else{
        console.log(`${num3} is greater`)
      }
};

greaterOfThree(8,2,10);


//wap to check leap year

// condition - 400/year
//            or 4/year and 100!/year

function leapYear(year){
    if(year % 400 == 0 || (year % 4 ==0 && year % 100 != 0) ){
      console.log(`${year} is a leap year`)
     }else{
      console.log("not a leap year ")
     }
};

leapYear(2011);

//wap a program to swap a two number

function swapNum(a ,b){
  let temp = a;
   a=b;
   b=temp;

  console.log(`a=${a} and b=${b}`);
};

swapNum(3,4);

//wap to swap a number without using third variable

function swapNumWithout3(a, b){
  a=a+b;//50
  b=a-b;//50 - 30 = 20
  a=a-b;//50 -20 = 30

  console.log(`a=${a} and b=${b}`);

};

swapNumWithout3(20,30);