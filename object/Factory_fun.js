function createCourse(title){
    return{
        title : title,
        enroll(){
            console.log('you are sucessfully enrolled.');
        }
    }
}

const course = createCourse('JS');
console.log(course.title);
course.enroll();