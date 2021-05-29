var user={
    firstname:"shubham",
    lastname:"pakhale",
    role:"admin",
    logincount:32,
    facebooksignedin:true,
    courselist:[],
    buycourse:function (coursename){
        this.courselist.push(coursename)

    },
    getcoursecount:function()
    {
        return `${this.firstname} is enrolled in total of ${this.courselist.length}`
    },

};
var courselist=true;
console.log(user.role)
console.log(user.getcoursecount())
user.buycourse("react js");
console.log(user.getcoursecount());