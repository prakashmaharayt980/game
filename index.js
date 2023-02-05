// create a variable of type strig and try to add a number to it.
/*let a="pradip";
  let b=6;
  console.log(a+b);
 //use ="typeof oprator".
  console.log(typeof (a+b));
create a const object in javascript can you change it to hols a number leter?
ans."no"
const a = {
    name: "pradip",
    section: 1,
    isprincipal: false 
   };
a = 54;*/


//try to add a new key to the const object in Q3 were you after to do it?
/*a['class'] = "bachalor";
console.log(a);*/

//write a js program to create a word-meaning dictionary of 5 words
/*const dict = {
        pubg: "player unknown battaleground",
        ff: "freefire",
        coc: "clash of clan"
    }
    //same way 
console.log(dict.[coc]);
console.log(dict.coc)*/

//comparison oprator;
/*let q = 1;
let w = "1";
     // == //equal
     // !=// not equal
     // ===//equal value and typeof
     //eg
 console.log("q===w =", q === w)
 // !==//not equal value or not equal typeof
 //eg
console.log("q!==w =", q !== w);
*/

//condition.

/*let b = prompt("what is your age") // ask to user "what is your age"
b = number.parseInt(b); //converting the string to a number
if (b<18){
  alert("this is valid");
}
else{
  alert("enjoy your sex life");
}*/


/* //switch
let expr=prompt("fruit name");
switch(expr){
  case 'orange':
    console.log('orange are Rs120');
    break;
  case 'Mangoes':
    console.log('magoes is RS200 per kg');
    break;
  case 'Papayas':
    console.log('Papayas is RS 300 per kd');
    break;
  default:
    console.log('sorry')
}*/

/*//tarnery equation
let a=prompt("what is your age");
a=Number.parseInt(a);//converting string to number
console.log(a>18?"you can drive":"you cannot deive");
*/

//"let" only use in blocks 
//"var" use universal 

//chp-3 loops
/* 
for loops- loop a block of code no of times
//eg of first natural number
  let sum=0;
  let n=prompt("enter the value of n");
  n=Number.parseInt(n);
    for (let i=0;i<n;i++) 
    {
      sum+=(i+1);
    }
  console.log(sum)*/
/*

for in loops-loops through the keys of an object.
for of loops-loops through the values of an object.
// eg in obg with arry
let obj={
pradip:25,
ram:36,
  krishna:55,
  abisheck:75,
  nabin:86  
}
//for in loops
for(let a in obj)
  {
    console.log("marks of" + a + "are" 
 + obj[a]);
  }
//for of loop
for(let b of "pradip")
  {
    console.log(b)
  } */

/*
while loops-loops a blocks based on a specific condition.
do-while loops-whole loop var

*/

//function- use for separating logic .
/*
  name=()=>{}//arrow function
cont hello=()=>{
  console.log("her name"); //it will not print casuse function has to call()
  return "mine";
}
let h=hellow();
console.log(h)  //it will print  


//old way or c programming way
function avag(a,b){
  avg=(a+b)/2;
  return ;
}
console.log(avg(5,6));//with value or not 

//simple way of function
const sum=(p,q)=>{
  return p+q;
}
let p=5,q=8;
console.log(sum)

//string
/*
Q.template literals or string interpolations.
let p1="prakash";
let p2="ram";
let sentence=`${p1} is friend of ${p2}`;//${}-putting variable  value directly 
console.log(sentence);
ans=prakash is friend of ram.


//string method;
let name="prakash";
let caste="mahara";
console.log(stringname.syntax)//way to write
  console.log(name.syntax)
     *syntax{
         .length  //display length of string;
         .toUppercase() //convert
         .toLowercase()  convert;
         .slice(start,end);  //display character from startting point and end at before the ending pointerEvents
           eg:
             console.log(name.slice(3,6)); //print "kas" ;index start from 0;
             console.log(name.slice(3));  //print "kash" ;since it doesnt have ending point;

        .replace("which","what you want"); //replacing string.
        .concat(); //combining string;
           eg:
            console.log(name.concat(,caste,"is my name"));
            //display : prakash mahara is my name.
        .trim() ; //remove the all space around the string.

     }
       //Q. loop for displaing string in single line;
     let ram = "pradip";
let i, j, kam;
kam = ram.length;
for (i = 0; i < kam; i++) {
    console.log(ram[i]);
}.


    Number.parseInt(string) // way to changing string to number typoe of
*/

//ARRAY METHODS
/* 
  arry always gives "object" not number nor string;
Q.way to manupulatre the array data;
 let num=[1,null,false,"false"];
    syntax;
      .tostring  // change the type of number to string;
      .join("value") //attach the "value" to string;
         eg:
            console.log(num.join(!=));
            ans= 1!=null!=false!=False
      .pop()   //remove the last element of array and return the value;
       eg:
           r=num.pop()
          console.log(num,r);
          ans=[1,null,false] ;r="false"
      .push("value") // add the "value " in array element at end and return new length;
      .shift() // remove the first element and return the value;
      .unshift("value") // add the "value" in begining of array element and return new length;
      .delete  // only remove the value and doest change the length of array and also return the value;
      .reverse  // arrange the element in opposite side;
      .sort() //arrange the element in alphabetical order only and modified the postion ,also it can be manipalted by function;
      .splice("start index","removing index","adding values") // it delete the element and replace with another element and givr return value;
   
*/

//ARRAY WITH LOOPS.
/*
let num=[1,2,3,4,5,6,7];  // array element;

  num.forEach(element => {
  console.log(element*element);  // making square
 });
 output= [1,4,9,16,25,36,49]   // this loop work on each element of array ;


 array.from;
    let a="prakash";
    let arr=Array.from(a);
    console,log(arr);
     Output=['p','r','a','k','a','s','h'];  // convert any item or collection in to array;


  for--in 
    for(let i in num){
      console.log(i)
    }
    output= 1
            2
            3
            4
            5
            6
            7   // display element of array;
  
  similary 
    for--of
     for(let i of num){
      console,log(i);
     }
     output=0
            1
            2
            3
            4
            5
            6  //display the element index or position of array;

  .map
    let arr=[1,2,3,4,5]
    let a=arr.map((value)=>{
      console.log(value);
      return value +1;
    })
    output=[2,3,4,5,6] // it is same as foreach loops but it make new array;
    
    
    .filter: 
    let arr=[1,2,3,4,5]
    let a=arr.filter((value)=>{
      
      return a<3;
    })
    output=[1,2] // display only needed array but in new array;
    
    .reduce:
    let arr=[1,2,3,4,5]
    let a=arr.reduce((h1,h2))=>{
      
      return h1+h2; // sum in series
    })
    output=15 // it will run the function until all array do function like sequence series;

    
    let a=math.random()*10;
    console.log(a);
    
    */

/* 
    Math.floor() // remove the number after the decimal point and give integer
    Math,random() // generate the random number;
    

  // Generate a number give by user at range, including max value
function numget(min, max) {
  let x = Math.floor(Math.random() * (max - min + 1)) + min;
  return x;
}
let a = prompt("give me a highest range");
let b = prompt("give me a lowest range");
let max = Number.parseInt(a);
let min = Number.parseInt(b);
let y = numget(min, max);
 // loops function to determine the value by user;
let count=0;
// console.log(y);
let ans
while(y!=ans){
 count=count+ 1;
  ans=prompt("enter your answer");
  if(ans==y){
    console.log("you got your answer");
    console.log(`${count}`);
  }
   else if(ans<y){
    console.log("your ans is smaller");
  }
  else if(ans>y){
    console.log("your ans is gerater")
  }
}
*/