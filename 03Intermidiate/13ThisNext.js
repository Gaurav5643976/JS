console.log(this);

var user = {
    firstName : "Gaurav",
    courseCount: 4,
    getCourseCount : function(){
        console.log("line 7",this);
    },
};
user.getCourseCount();