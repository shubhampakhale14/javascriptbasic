const user=require("./classandmodule.js")
const shubham=new user("shubham","shubham@gmail.com");
console.log(shubham.getinfo().email);
shubham.enrollcourse("react bootcamp");
shubham.enrollcourse("angular bootcamp");
shubham.enrollcourse("bootstap bootcamp");
console.log(shubham.getcourselist())

