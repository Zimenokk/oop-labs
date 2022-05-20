class Interface{
    constructor(props) {
    }
    firstUplBtn = document.getElementById("firstUplBtn")
    firstOutput = document.getElementById("firstOutput")
    firstReadyOutput = document.getElementById("firstReadyOutput")

    InterfaceSet(){
        firstUplBtn.addEventListener('click' ,()=>this.sortQue(this.uploadJson(this.link)));

    }

    sortQue(jsonObj){
        if(this.link==="https://zimenokk.github.io/oop-labs/lab2/basicQueue.json"){
            jsonObj.then(data =>{
                firstOutput.innerHTML = "";
                firstReadyOutput.innerHTML = "";

                for (let key  in data){
                    firstOutput.innerHTML +=data[key];
                    firstOutput.innerHTML +="; ";
                    firstReadyOutput.innerHTML +=data[key];
                    firstReadyOutput.innerHTML +="; ";
                }
            })
        }else if(this.link==="https://zimenokk.github.io/oop-labs/lab2/priorityQueue.json"){
            secondReadyOutput.innerHTML = "";
            jsonObj.then(data =>{
                let jsonKeys = Object.keys(data);
                jsonKeys.forEach(key=>{

                    secondReadyOutput.innerHTML +=data[key];
                    secondReadyOutput.innerHTML +="; ";

                })
            })
        }else if(this.link==="https://zimenokk.github.io/oop-labs/lab2/reverseQueue.json"){
            if(event.target.id==="thirdUPL"){
                thirdOutput.innerHTML = "";
                jsonObj.then(data =>{
                    let jsonKeys = Object.keys(data);
                    jsonKeys.forEach(key=>{
                        thirdOutput.innerHTML +=data[key];
                        thirdOutput.innerHTML +="; ";
                    })


                })
            }else if(event.target.id==="thirdQUE"){
                thirdReadyOutput.innerHTML = "";
                jsonObj.then(data =>{
                    let reversedQueArray = Object.keys(data).reverse()
                    reversedQueArray.forEach(key=> {
                        thirdReadyOutput.innerHTML +=data[key];
                        thirdReadyOutput.innerHTML +="; ";
                    })

                })
            }
        }

    }

}
class BasicQue extends Interface{
    constructor(link) {
        super()
        this.link = "https://zimenokk.github.io/oop-labs/lab2/basicQueue.json";
    }
    // firstUplBtn = document.getElementById("firstUplBtn")
    // firstOutput = document.getElementById("firstOutput")
    // firstReadyOutput = document.getElementById("firstReadyOutput")

    async uploadJson(link){
        var request = await fetch(link);
        let result = await request.json();
        return result
    }


}


class PriorityQue extends BasicQue{
    constructor(link) {
        super(link);
        this.link = "https://zimenokk.github.io/oop-labs/lab2/priorityQueue.json";
    }

    secondUplBtn = document.getElementById("secondUplBtn");
    secondOutput = document.getElementById("secondOutput")
    secondReadyOutput = document.getElementById("secondReadyOutput")

    InterfaceSet(){
        secondUplBtn.addEventListener('click' ,()=>this.sortQue(this.uploadJson(this.link)));
    }

}

class ReverseQue extends PriorityQue{
    constructor(link) {
        super(link);
        this.link = "https://zimenokk.github.io/oop-labs/lab2/reverseQueue.json";
    }
    thirdOutput = document.getElementById("thirdOutput")
    thirdReadyOutput = document.getElementById("thirdReadyOutput")

    InterfaceSet(){
        thirdUPL.addEventListener('click', ()=>this.sortQue(this.uploadJson(this.link)));
        thirdQUE.addEventListener('click', ()=>this.sortQue(this.uploadJson(this.link)));
    }

}

let basicLogger = new BasicQue();
let superLogger = new PriorityQue();
let reverceLogger = new ReverseQue();
basicLogger.InterfaceSet()
superLogger.InterfaceSet()
reverceLogger.InterfaceSet()