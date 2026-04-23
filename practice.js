//1 problem statement for traffic light based on color

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

//2 problem statement related to popcorn pricing

let size="L";

if(size=="XL"){
    console.log("prize is 250");
}
else if(size=="L"){
    console.log("prize is 200");
}
else if(size=="M"){
    console.log("prize is 100");
}
else{
    console.log("prize is 50");
}


//3problem statement

let str="apple";

if(str[0]=="a" && str.length==5){
    console.log("it is a good string")
}
else{
    console.log("not a good string");
}

//4 print the day of the week using number variable 'day' with 1 to 7

let day="sunnday";

switch(day){
    case"sunday":
    console.log("sunday");
    break;
    case"monday":
    console.log("monday");
    break;
    case"tuesday":
    console.log("tuesday");
    break;
    case"wednesday":
    console.log("wednesday");
    break;
    case"thursday":
    console.log("thursday");
    break;
    case"friday":
    console.log("friday");
    break;
    case"saturday":
    console.log("saturday");
    break;
    default:
        console.log("not a day idiot");
}