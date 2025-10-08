const student=require('./student');
const course=require('./course');
const studentcourse=require('./studentcourse');

// Defining relationships
student.belongsToMany(course, { through: studentcourse, foreignKey: 'studentId' });
course.belongsToMany(student, { through: studentcourse, foreignKey: 'courseId' });

module.exports={student,course,studentcourse};
