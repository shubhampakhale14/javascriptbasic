// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }
// for(let i=0;i<=10;i++)
// {
// console.log(i);
// }
 
const mystates=["rajasthan",
"delhi",
"assam",
1897,
"tamil nadu",
"maharshtra"
];
for (let i=0;i<=mystates.length;i++)
{   if(typeof mystates[i]!="string") continue;
    console.log(mystates[i]);
}
for (let i=0;i<=mystates.length;i++)
{   if(typeof mystates[i]!=="string") break;
    console.log(mystates[i]);
}
for (let i=0;i<=mystates.length;i++)
{   if(typeof mystates[i]==="string") 
    console.log(mystates[i]);
}

