const hitesh={
    firstname:"Hitesh",
    lastname:"chaudhary",
    coursecount:3,
    getInfo:function()
    {
        console.log(`
        first name is ${this.firstname}
        last name is ${this.lastname}
        his role is ${this.role}
        ad he is studying ${this.coursecount}

        `)
    }
};
const dj=
{ firstname:"rock",
lastname:"dj",
role:"sub-admin",
coursecount:4,

};
hitesh.getInfo();
hitesh.getInfo.bind(dj)(); //bind method
hitesh.getInfo.call(dj);//call method
