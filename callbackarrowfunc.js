
// function isEven(element)
// {
//     if(element %2==0)
//     {
//     return true;
// }
// return false;
// }
// console.log(isEven(100))

var isEven=(element) => {
    return element % 2===0; //arrow function necessary return statement.
};
console.log(isEven(23));

var result=[2,4,6,8].every(isEven);
console.log(result);//callback function
var result=[2,4,3,8].every(isEven);
console.log(result);//callback function
var result=[3,6,9,12].every(isEven);
console.log(result);//callback function
var result=[20,20,40,50].every((e)=>

{
    return e % 2 ===0;

});
console.log(result);
var  result=[2,4,6,8].every((e)=>e%2===0);
console.log(result);



