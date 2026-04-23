console.log("hello");
//sum of a and b
let a=10;
let b=12;
let output= "the sum of a and b " + (a+b) +" ruppes";
console.log("the sub of a and b is",a-b);
console.log(output);

//template literals
let temp=`using the template literals ${a+b} ruppess`;
console.log(temp);

//conditional statement

if(a>12){
    console.log("yehh i m more than 10");
}
else{
    console.log("shit i m not");
}

//problem statement for traffic light based on color

let color="green";

if(color=="red"){
    console.log("stop bitch");
}
if(color=="yellow"){
    console.log("Be ready");
}
if(color=="green"){
    console.log("gooooo");
}

//if else statement 

let age=-20;

if(age>=18){
    console.log("eligible for vote");
}
else if (age<18 & age>0){
    console.log("no can't vote");
}
else{
    console.log("not a chance")
}
