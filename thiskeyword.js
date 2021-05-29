//what is empty object and window object?
// for all regular fuction ,this points to window object,
var user=
{
    firstname:"hitesh",
    coursecount:4,
    getcoursecount:function()
    {
        console.log("line 7",this);
        function sayhello()
        {
            console.log("hello")
            console.log("line 10",this);
        }sayhello()

    },

};
user.getcoursecount();
