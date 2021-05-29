var user={
    firstname:"shubham",
    lastname:"pakhale",
    role:"admin",
    logincount:32,
    facebooksignedin:true,

};
console.log(user.firstname);
console.log(user["lastname"]);
user.logincount=44;
console.log(user.logincount);
console.log(user);
console.table(user);