var myMap=new Map();
myMap.set(1,"uno")
myMap.set(2,"dos")
myMap.set(3,"tres")
myMap.set(4,"cuatrao")
console.log(myMap);
for(let key of myMap.keys())
{
    console.log(`key is:${key}`);
}
for(let value of myMap.values())
{
    console.log(`values is:${value}`);
}
for(let [key,value] of myMap)
{
    console.log(`key is:${key} and value is ${value}`);
    
}
myMap.forEach((v,k) => console.log(`${v} and key is ${k}`));
myMap.delete(2);
console.log(myMap);