const array = ["a", "b", "c", "d", "e", "f"];

console.log("-0-");
for(let index = 0; index < array.length; index++){
    const element=array[index];
    console.log(element);
}

console.log("-1-");
for(element of array){
    console.log(element);
}

console.log("-2-");
array.map((element)=> {
    console.log(element);
});