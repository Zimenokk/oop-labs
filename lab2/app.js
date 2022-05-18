// let firstUplBtn = document.getElementById("firstUplBtn")
// let secondUplBtn = document.getElementById("secondUplBtn")
// let thirdUPL = document.getElementById("thirdUPL")
// let thirdQUE = document.getElementById("thirdQUE")
//
// let firstOutput = document.getElementById("firstOutput")
// let firstReadyOutput = document.getElementById("firstReadyOutput")
// let secondOutput = document.getElementById("secondOutput")
// let secondReadyOutput = document.getElementById("secondReadyOutput")
// let thirdOutput = document.getElementById("thirdOutput")
// let thirdReadyOutput = document.getElementById("thirdReadyOutput")
//
//
// let basicLink = "https://zimenokk.github.io/oop-labs/lab2/basicQueue.json";
// let priorityLink = "https://zimenokk.github.io/oop-labs/lab2/priorityQueue.json";
// let reverseLink = "https://zimenokk.github.io/oop-labs/lab2/reverseQueue.json";
//
// firstUplBtn.addEventListener('click' ,()=>basicQueueAssign(uploadJson(basicLink)));
// secondUplBtn.addEventListener('click' ,()=>priorityQue(uploadJson(priorityLink)));
// thirdUPL.addEventListener('click', ()=>reverseQueUpload(uploadJson(reverseLink)));
// thirdQUE.addEventListener('click', ()=>reverseQueDo(uploadJson(reverseLink)));
//
//
//
// async function uploadJson(link){
//     var request = await fetch(link);
//     let result = await request.json();
//     // console.log(result)
//     return result
// }
//
//     function basicQueueAssign(jsonObj){
//         jsonObj.then(data =>{
//             firstOutput.innerHTML = "";
//             firstReadyOutput.innerHTML = "";
//
//             for (let key  in data){
//                 firstOutput.innerHTML +=data[key];
//                 firstOutput.innerHTML +="; ";
//                 firstReadyOutput.innerHTML +=data[key];
//                 firstReadyOutput.innerHTML +="; ";
//                 // count++
//             }
//         })
//     }
//     function priorityQue(jsonObj){
//         secondReadyOutput.innerHTML = "";
//         jsonObj.then(data =>{
//             // console.log(data)
//             let jsonKeys = Object.keys(data);
//              jsonKeys.forEach(key=>{
//
//                  secondReadyOutput.innerHTML +=data[key];
//                  secondReadyOutput.innerHTML +="; ";
//
//              })
//         })
//     }
//
//     function reverseQueUpload(jsonObj){
//         thirdOutput.innerHTML = "";
//         jsonObj.then(data =>{
//             let jsonKeys = Object.keys(data);
//             jsonKeys.forEach(key=>{
//                 thirdOutput.innerHTML +=data[key];
//                 thirdOutput.innerHTML +="; ";
//             })
//
//
//         })
//     }
//     function reverseQueDo(jsonObj){
//         thirdReadyOutput.innerHTML = "";
//         jsonObj.then(data =>{
//             let reversedQueArray = Object.keys(data).reverse()
//             reversedQueArray.forEach(key=> {
//                 console.log(data[key])
//                 thirdReadyOutput.innerHTML +=data[key];
//                 thirdReadyOutput.innerHTML +="; ";
//             })
//
//         })
//     }

class Queue{

    constructor() {
        this.basicLink = "https://zimenokk.github.io/oop-labs/lab2/basicQueue.json";
        this.priorityLink = "https://zimenokk.github.io/oop-labs/lab2/priorityQueue.json";
        this.reverseLink = "https://zimenokk.github.io/oop-labs/lab2/reverseQueue.json";
    }

    firstUplBtn = document.getElementById("firstUplBtn")
    secondUplBtn = document.getElementById("secondUplBtn")
    thirdUPL = document.getElementById("thirdUPL")
    thirdQUE = document.getElementById("thirdQUE")

    firstOutput = document.getElementById("firstOutput")
    firstReadyOutput = document.getElementById("firstReadyOutput")
    secondOutput = document.getElementById("secondOutput")
    secondReadyOutput = document.getElementById("secondReadyOutput")
    thirdOutput = document.getElementById("thirdOutput")
    thirdReadyOutput = document.getElementById("thirdReadyOutput")

    variableSet(){

        firstUplBtn.addEventListener('click' ,()=>this.basicQueueAssign(this.uploadJson(this.basicLink)));
        secondUplBtn.addEventListener('click' ,()=>this.priorityQue(this.uploadJson(this.priorityLink)));
        thirdUPL.addEventListener('click', ()=>this.reverseQueUpload(this.uploadJson(this.reverseLink)));
        thirdQUE.addEventListener('click', ()=>this.reverseQueDo(this.uploadJson(this.reverseLink)));
    }
    async uploadJson(link){
        var request = await fetch(link);
        let result = await request.json();
        // console.log(result)
        return result
    }

    basicQueueAssign(jsonObj){
        jsonObj.then(data =>{
            firstOutput.innerHTML = "";
            firstReadyOutput.innerHTML = "";

            for (let key  in data){
                firstOutput.innerHTML +=data[key];
                firstOutput.innerHTML +="; ";
                firstReadyOutput.innerHTML +=data[key];
                firstReadyOutput.innerHTML +="; ";
                // count++
            }
        })
    }

    priorityQue(jsonObj){
        secondReadyOutput.innerHTML = "";
        jsonObj.then(data =>{
            // console.log(data)
            let jsonKeys = Object.keys(data);
            jsonKeys.forEach(key=>{

                secondReadyOutput.innerHTML +=data[key];
                secondReadyOutput.innerHTML +="; ";

            })
        })
    }

    reverseQueUpload(jsonObj){
        thirdOutput.innerHTML = "";
        jsonObj.then(data =>{
            let jsonKeys = Object.keys(data);
            jsonKeys.forEach(key=>{
                thirdOutput.innerHTML +=data[key];
                thirdOutput.innerHTML +="; ";
            })


        })
    }
    reverseQueDo(jsonObj){
        thirdReadyOutput.innerHTML = "";
        jsonObj.then(data =>{
            let reversedQueArray = Object.keys(data).reverse()
            reversedQueArray.forEach(key=> {
                console.log(data[key])
                thirdReadyOutput.innerHTML +=data[key];
                thirdReadyOutput.innerHTML +="; ";
            })

        })
    }
    conLogger(){
        console.log(firstUplBtn);
    }
}
let basicLogger = new Queue();
basicLogger.variableSet()

