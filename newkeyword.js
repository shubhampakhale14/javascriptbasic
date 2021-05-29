var User=function(firstname,coursecount)
{

    this.firstname=firstname;
    this.coursecount=coursecount;
    this.getcoursecount=function()
    {
        console.log(`course count is:${this.coursecount}`);

    }
    
}
User.prototype.getfirstname=function()
{
    console.log(`your firstname is:${this.firstname}`)
}



var hitesh= new User("hitesh",2);//new  keyword is responsible for using this syntax and second things invoking constructor and creating a unique instance every  single time 
console.log(hitesh);
hitesh.getcoursecount();
hitesh.getfirstname();

var sam= new User("sam",2);
console.log(sam);
sam.getcoursecount();
hitesh.getfirstname();