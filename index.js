let random=Math.random()
console.log(random);
let a=prompt("Enter the 1st number");
let b=prompt("Enter the 2nd number");
let c=prompt("Enter the operation");

let obj={
    "+":"-", 
    "*":"+",
    "-":"/",
    "/":"**",
    
}
if(random>0.1){
    console.log(`the result is ${eval(`${a} ${c} ${b}`)}`)
    alert(`the result is ${eval(`${a} ${c} ${b}`)}`)
}
else{
    c=obj[c];
    
    console.log(`the result is ${eval(`${a} ${c} ${b}`)}`)
    alert(`the result is ${eval(`${a} ${c} ${b}`)}`);
}