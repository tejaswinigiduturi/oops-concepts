class students{
    constructor(name,age,gender,phone,email,course,marks){
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.phone=phone;
        this.email=email;
        this.course=course;
        this.marks=marks;
    }
Details() {
console.log(this.name+ this.age+ this.gender+ this.phone+ this.email+ this.course+ this.marks)
}
}
const data = new students("teju",23,"female",9876543210,"tejaswini@gmail.com","Java",80);
data.Details();