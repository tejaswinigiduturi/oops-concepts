class students{
    #fees;
    constructor(name,age,course){
        this.name=name;this.age=age;this.course=course; }
    setfees(){ return this.#fees;}  
    getfees(){return this.#fees; }} 
class schoolstudent extends students{
    constructor(name,age,course,marks){
        super(name,age,course);
        this.marks=marks; }
    getdetails(){
        console.log(`${this.name}${this.age}${this.course}${this.marks}.`)}} 
   class highschoolstudent extends students{
    constructor(name,age,course,marks,grade){
        super(name,age,course,marks,grade);
        this.grade=grade;}
         getdetails(){
        console.log(`${this.name}${this.age}${this.course}${this.marks}.`) }}
   
    



