class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
introduce() {
        console.log(`${this.name} is ${this.age} years old.`);
    }
}
class HighSchoolStudent extends Student {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
 study() {
        console.log(`${this.name} is studying in grade ${this.grade}.`);
    }
}
const student1 = new HighSchoolStudent("Teju", 24, "A");
student1.introduce();
student1.study();
