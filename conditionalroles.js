//create an application with following roles
//admin-fets ful Access
//subadmin-gets access to create/delete courses.
//testprep-gets access to create/delete tests
//user-gets access to consume content.
var user="admin";
switch(user)
{
    case "admin":
         console.log("u get full access");
         break;
    case "subadmin":
         console.log("gets access to create/delete courses.");
         break;
    case "testprep":
         console.log("gets access to create/delete tests");
         break;
    default:
             console.log("Trial user");
          break;
        }