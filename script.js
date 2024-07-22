//complete this code
class Person {
	constructor(n,a){
		this.name = n;
		this.age = a;
	}
	get getName(){
		return this.name;
	}
	set setAge(value){
		this.age=value;
	}
}

class Student extends Person {
	study(){
		console.log(`${this.name} is studying`);
	}
}

class Teacher extends Person {
	teach(){
		console.log(`${this.name} is teaching`);
	}
}
const person=new Person("Ram",'20');
console.log(person.name);

person.age='30';
console.log(person.age);

const student = new Student("student1", 22);
student.study();

const teacher = new Teacher("teacher1", 40);
teacher.teach(); 

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
