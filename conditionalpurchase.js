var isLoggedIn=true;
var isEmailVerified=true;
var cardinfo=true;
// if(isLoggedIn){
//     console.log("Logged in sucess");
//     if(isEmailVerified)
//     {
//         console.log("email is verified");
//         if(cardinfo)
//         {
//             console.log("u can make purchase")
//         }
//     }
// }
if(isLoggedIn && isEmailVerified && cardinfo)
{
    console.log("Allow user to make a purchase");
}
else{
    console.log("you are  not allowed to do that");
}