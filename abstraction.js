class student {
    #marks;
    constructor(name,marks){
        this.name = name;
        this.#marks= marks;
    }
    getmarks(){
        return this.#marks;
    }
    updatemarks(newmarks){
        if (newmarks>=0 && newmarks <=100){
            this.#marks = newmarks;
             }
            else{
                console.log("invalid marks.must be between 0 and 100.");
            }
             }
       displayinfo(){
        console.log(`name: ${this.name},marks: ${this.#marks}`);
       }
}
const s5= new student("sanju",75);
s5.displayinfo();
s5.updatemarks(95);
console.log(`updated marks:${(s5.getmarks())}`)