class Person{
    constructor(name, surname, password, answer) {
        if (this.constructor.name === "Person"){
            throw new Error(`${this.constructor.name}: can not create instance of abstract class`);
        }
        this.name = name;
        this.surname = surname;
        this.password = password;
        this.answer = answer;
    }
    inputName = document.getElementById("inputName").value
    inputSurName = document.getElementById("inputSurName").value
    inputPass = document.getElementById("inputPass").value
    inputQuestion = document.getElementById("inputQuestion").value
    entryBtn = document.getElementById("entryBtn").value

    goAuth(){
        entryBtn.addEventListener('click', this.login)
    }
    dbObj = {};
    dbCreate(){
        let createdDb = {}
        return createdDb
    }
    dbMet(){
        // console.log(this.created)

        this.dbObj[this.name] = {}
        this.dbObj[this.name]["role"] = this.constructor.name
        this.dbObj[this.name]["name"]=this.name
        this.dbObj[this.name]["surname"]=this.surname
        this.dbObj[this.name]["password"]=this.password
        this.dbObj[this.name]["answer"]=this.answer

        return this.dbObj
    }
    conLogger(dbMet){

        console.log(this.dbObj)
    }
    login(){
        if( this.inputName === this.name && this.inputSurName === this.surname &&
            this.inputPass === this.password && this.inputQuestion === this.answer){
            console.log("it's ok")
        }else{
            console.log("no")
        }

    }

}

class Worker extends Person{
    constructor(name, surname, password, answer) {
        super(name, surname, password, answer);
    }
    inputName = document.getElementById("inputName")
    inputSurName = document.getElementById("inputSurName")
    inputPass = document.getElementById("inputPass")
    inputQuestion = document.getElementById("inputQuestion")
    entryBtn = document.getElementById("entryBtn")
}
class Manager extends Person{
    constructor(name, surname, password, answer) {
        super(name, surname, password, answer);

    }

}
let coolWorker = new Worker("Petro", "Kylak", "1", "1")
let superWorker = new Worker("Andrew", "Bibi", "2", "2")
coolWorker.dbMet()
superWorker.dbMet()
coolWorker.conLogger()
superWorker.conLogger()