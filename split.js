// const str='the quick brown fox jumps over the lazy dog,';
// const words=str.split('');
// console.log(words[3]);
// const chars=str.split('');
// console.log(chars[8]);
// const strCopy=str.split();
// console.log(strCopy);
function splitstring(stringtosplit,separator)
{
    const arrayofstrings=stringtosplit.split(separator)
    console.log('the original string is:',stringtosplit)
    console.log('the separtor is:',separator)
    console.log('the array has',arrayofstrings.length,'elements',arrayofstrings.join('/'))
}
const tempststring='oh brave new world that has such people in it.'
const monthstring='jan,feb,mar,apr,may,jun,jul,aug,sep,oct,nov,dec'
const space=''
const comma=','
splitstring(tempststring,space)
splitstring(tempststring)
splitstring(monthstring,comma)
// booleans can be objects(if defined with new keyword)
// numbers can be objects(if defined with rhe new keyword)
// strings can be objects(if defined with new keyword)
// dates are always objects
// maths are always objects.
// regular expressin are always objects.
// array are always objects
// function are always objects
// object are always.
// object are always objects.
// all javascript values,except primitives,are objects.