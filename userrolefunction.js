// Define a function that can answer the role of a user.
// A user can be n following
// admin-with all access.
// subadmin-with access to create /delete Course.
// testprep-with access to create/delete tests.
// user-consume all content.
// other-trial user.

function getUserRole(name,role)
{
    switch(role)
    {
    case "admin":
        return `${name} is admin with all access`;
        break;
    case "subadmin":
        return `${name} is sub-admin with all access to create and delete`;
        break;
    case "testprep":
        return `${name} is subadmin with access to create and delete tests`;
        break;
        case  "user":
            return `${name} is a user to consume content`;
      default:
          return `${name} is a trail user`;
        break;
}
}
console.log(getUserRole("hitesh","testprep"));
var getRole=getUserRole("shubham","user");
console.log(getRole);