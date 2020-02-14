/*const success = "Passwords match."
const error = "Passwords do not match"
const comparePw = (pw1, pw2) => {
    if ((document.getElementById(pw1).value) === (document.getElementById(pw2))) {
        alert(success);
    }
}

function createStudent(name, section){

    let stud= {};
    stud.name = name;
    stud.section = section;
    return stud;

}

let juan = createStudent("juan dela cruz", "2ITE");
let pedro = createStudent("pedro fernandez", "2ITE");

document.write(`${juan.name} is enrolled in section ${juan.section}<br>`)
document.write(`${pedro.name} is enrolled in section ${juan.section}<br>`)
*/

/*function Student(name, section){
    this.name = name;
    this.section = section;
    this.speak = function(language){
        document.write(`${this.name} can speak ${language}`);
    }
}

let stud1 = new Student("juan dela cruz", "bobo");
stud1.speak("tagalog");
*/
/*class Student{
    constructor(name,course,section){
        this.name = name;
        this.course = course;
        this.section = section;
    
    }
    speak = function(language){
        document.write(`${this.name} can speak ${language} <br>`);
    }
}

let stud1 = new Student("juan dela cruz", "bobo");
let stud2 = new Student("juan dela cruz", "weak");

stud1.speak("english");
stud2.speak("magaling");*/

/*function Student(name, section){
    this.name = name;
    this.section = section;
}

Student.prototype.fullname = function(){
    return (this.name + " is enrolled in section " + this.section +"<br>" );
}
Student.prototype.school = "ust";

let stud1 = new Student("juan dela cruz", "bobo");
let stud2 = new Student("juan dela cruz", "weak");

document.write(stud1.fullname());
document.write(`${stud2.name} is studying in ${stud2.school} `); */

/*let animal = {kind: "mammal", type: "Dog", breed: "doberman"};
let arr = [this.kind, this.type, this.breed];
let displayAnimal = function (kind, type, breed) {
    document.write(`Kind: ${this.kind}, Type: ${this.type}, Breed: ${this.breed}`);
}
displayAnimal.call(animal, arr); */

let animal = {kind: "mammal", type: "Dog", breed: "doberman"};
let func = function(){
    return `${this.kind}, ${this.type}, ${this.breed}`
}

let newfunc = func.bind(animal);
document.write(newfunc());
