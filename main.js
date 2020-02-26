var Student = require('./Student');

//调用静态方法
Student.Student.showAll('alice', 12);
//获取静态变量
console.log(Student.Student.TName);

//创建类对象
var student = new Student.Student();
//调用对象方法
student.show();
student.showAge();

console.log(Student.add(1, 2));