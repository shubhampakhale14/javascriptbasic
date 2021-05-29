// for of is for Array
// for in is for Object

const names=["youtube","facebook","instragram","netfix","Amazon"]
for(const n of names)
{
    console.log(n);
}
const symbols={
    yt:"youtube",
    ig:"instagram",
    fb:"facebook",

};
for (const n in symbols)
{
    console.log(n);
}
for (const n in symbols)
{
    console.log(symbols[n]);
}
for (const n in symbols)
{
    console.log(`key is:${n} and value is: ${symbols[n]}`);
}