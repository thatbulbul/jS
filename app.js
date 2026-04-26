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



//nested if-else

let marks=80;

if(marks>33){
    console.log("student is passed");
    if(marks>60& marks<70){
        console.log("you get an B");
    }
    else if(marks>70){
        console.log("you get an A");
    }
}
else{
    console.log("you are failed");
}

//switch statement

let rang="green";

switch(rang){
    case"red":
    console.log("stop");
    break;
    case"yellow":
    console.log("wait");
    break;
    case"green":
    console.log("goo");
    break;
    default:
    console.log("light is broken");
}

//alert

//alert("hello there");
console.error("this is wrong password"); //error
console.warn("warning sample");

//prompt

let app= prompt("enter your dob");
console.log(app);

//trim & uppercase
let word='helloworld ';
console.log(word.trim().toUpperCase());