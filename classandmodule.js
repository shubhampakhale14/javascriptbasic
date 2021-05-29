class user{
    constructor(name,email)
    {
        this.name=name;
        this.email=email;
    }
    courselist=[];
    getinfo()
    {
        return {name:this.name,email:this.email};
    }
    enrollcourse(name)
    {
        this.courselist.push(name);
    }
    getcourselist()
    {
        return this.courselist;
    }
    login()
    {
        return "u are login in";

    }
    
}class subadmin extends user
{
    getadmininfo()
    {
        return "i am subadmin";
    }
}


module.exports=user;
const rock=new user("darshan","darshan@gmail.com");
console.log(rock.getinfo());
rock.enrollcourse("html bootcamp");
console.log(rock.getcourselist());
const tom=new subadmin();
console.log(tom.getadmininfo())
console.log(tom.login());
console.log(tom.getinfo());
