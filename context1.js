// function declaration are scanned and made avaiable.
// variable declaration are scanned and made undefined
 tipper(80)
 function tipper(a)
{
    var bill=parseInt(a);
    console.log(bill+5);
}

var bigTipper=function(a)
{
    var bill=parseInt(a);
    console.log(bill+15);
}
bigTipper("300");
var name="hitesh";

// console.log(name);
function sayname()
{
    var name="mr.shubham";
    console.log(name);

}
sayname();
console.log(name);




