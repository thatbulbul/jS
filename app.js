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

// let app= prompt("enter your dob");
// console.log(app);

//trim & uppercase
let word='helloworld ';
console.log(word.trim().toUpperCase());

//slice

let name="bulbul sharma";
console.log(name.slice(4,9));
console.log(name.indexOf("sh"));
console.log(name.replace("ul","cu"));

let college="apnaCollege";
console.log(college.slice(4).replace("l","t").replace("l","t"));

//array

let arr=[2,"Bulbul",17.4,true];

//array concatenation of arr and arr2

let arr2=[3,"Sharma"];
arr.concat(arr2);

//sorting
let counting=[2,8,33,1,4];
console.log(counting.sort());

//loop
// for(let i=0;i <10;i++){
//     console.log(i);
// }

//print odd numbers
// for(let j=1;j<=15;j=j+2){
//     console.log(j);
// }

//print even number

// for (let k=2;k<=16;k=k+2){
//     console.log(k);
// }

//nested loop

// for(let i=1; i <=4;i++){
//     for(j=1;j<=3;j++){
//         console.log(j);
//     }
// }

//while loop
// let k=1;
// while(k<=10){
// console.log(k),
// k++;
// }

//nested loops in arrays 
let heros=[["ironman","thor",'hulk'],["wonderwoman","superman","flask"]];

// for(let i=0;i<heros.length;i++){
//     console.log(heros[i]);
//     for(let j=0;j<heros[i].length;j++){
//         console.log(heros[i][j]);
//     }
// }
for(list of heros){
    for(hero of list){
        console.log(hero);
    }
}


//for of Loop

let fruits=["apple","banana","pear","grapes"];
for(fruit of fruits){
    console.log(fruit);
}

let char="BulbulSharma";
for(charactars of char){
    console.log(charactars);
}