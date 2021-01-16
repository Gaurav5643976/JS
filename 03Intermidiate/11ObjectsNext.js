var user = {
    firstName : "Gaurav",
    lastName : "Singh",
    role : "Admin",
    loginCount : 32,
    facebookSignedIn : true,
    courseList : [],
    buyCourse : function(courseName){
        this.courseList.push(courseName);
    },
    getCourseCount : function(){
        return `${this.firstName} is enrolled in total of ${this.courseList.length}`;
    },
    
};
var courseList = true;
console.log(user.firstName);
console.log(user.getCourseCount());
user.buyCourse("MERN Course");
user.buyCourse("Django Course");
console.log(user.getCourseCount());