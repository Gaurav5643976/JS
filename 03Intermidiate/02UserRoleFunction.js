// Define a function that can answer the role of a user.
// A user can be on following roles:
// admin - with all access 
// subadmin - with access to creatr/delete courses 
// testprep - with access to create/delete tests 
// user - consume all content 
// other - trial user. 

// Input: getUserRole(name,role)

function getUserRole(name, role){
    switch (role) {
        case "admin":
            return `${name} is a ${role} with all access`;
            break;// this is not necessary
        case "subadmin":
            return `${name} is a ${role} with access to creatr/delete courses`;
            break;
        case "testprep":
            return `${name} is a ${role} with access to create/delete tests`;
            break;
        case "user":
            return `${name} is a ${role} to consume all content `;
            break;   
        default:
            return `${name} is guest!`;
            break;
    }
}
var who=getUserRole("Gaurav","admin");
console.log(who);