// In JavaScript, objects are a reference type. Two distinct objects are never equal, 
// even if they have the same properties. Only comparing the same o
//  reference with itself yields true.
// two variable, two distinct objects with same properties
var fruit={name:'apple'};
var fruitbar={name:'apple'};
fruit==fruitbear;//return false
fruit===fruitbear;//return false

// two variables,single Object
var fruit={name:'apple'};
var fruitbear=fruit;//Assgn fruit object reference to fruitbear.
//here fruit and fruitbear are pointing to same object
fruit==fruitbear;//return true
fruit===fruitbear;//return true
// fruit.name = 'grape';
// console.log(fruitbear);

