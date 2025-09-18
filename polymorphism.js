class students {
    getRole() {
        console.log("akshay is singing");
    }
}
class person extends students {
    getRole() {
        console.log("akshay is dancing");
    }
}
class newstudents extends students {
    getRole() {
        console.log("akshay is laughing");
    }
}
const details = new person();
const info = new newstudents();
details.getRole();
info.getRole();