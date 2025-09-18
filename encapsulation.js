class students{
    constructor(name,age,gender,phone,email,course,marks){
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.phone=phone;
        this.email=email;
        this.course=course;
        this._marks=marks;
    }
    getmarks=function(){
        return this._marks;
    }

Details() {
console.log(this.name+ this.age+ this.gender+ this.phone+ this.email+ this.course+ this._marks)
}
}
   const data = new students("teju",23,"female",9876543210,"tejaswini@gmail.com","Java",80);
data.Details();
 const data1 = new students("charan", 24,"male",9876543210,"charan@gmail.com","Java",90);
 data1.Details();