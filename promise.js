const uno=()=>
{
     return "i am one";
};
const dos=async()=>

{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("i am two");
            
        }, 3000);

        resolve("i got that")
    });
    
    // setTimeout(()=>{
    //     console.log("wooooh");
    // },9000);console.log("i am two");

};
const   tres=()=>
{
    console.log("i am tree");
}
const callme=async()=>{
{
    let valone=uno();
    console.log(valone);

    let valtwo=dos();
    console.log(valtwo);

    let valthree=tres();
    console.log(valthree);
};
}
callme();
