let firstUplBtn = document.getElementById("firstUplBtn")
let secondUplBtn = document.getElementById("secondUplBtn")
let thirdUPL = document.getElementById("thirdUPL")
let thirdQUE = document.getElementById("thirdQUE")

let firstOutput = document.getElementById("firstOutput")
let firstReadyOutput = document.getElementById("firstReadyOutput")
let secondOutput = document.getElementById("secondOutput")
let secondReadyOutput = document.getElementById("secondReadyOutput")
let thirdOutput = document.getElementById("thirdOutput")
let thirdReadyOutput = document.getElementById("thirdReadyOutput")


let basicLink = "https://zimenokk.github.io/oop-labs/lab2/basicQueue.json";
let priorityLink = "https://zimenokk.github.io/oop-labs/lab2/priorityQueue.json";
let reverseLink = "";

firstUplBtn.addEventListener('click' ,()=>basicQueueAssign(uploadJson(basicLink)));
secondUplBtn.addEventListener('click' ,()=>priorityQue(uploadJson(priorityLink)));
thirdUPL.addEventListener('click', ()=>reverseQue(uploadJson(reverseLink)));



async function uploadJson(link){
    var request = await fetch(link);
    let result = await request.json();
    // console.log(result)
    return result
}

    function basicQueueAssign(jsonObj){
        let count=0;
        jsonObj.then(data =>{
            // console.log(data)
            for (let key  in data){
                firstOutput.innerHTML +=data[key];
                firstOutput.innerHTML +="; ";
                firstReadyOutput.innerHTML +=data[key];
                firstReadyOutput.innerHTML +="; ";
                // count++
            }
        })
    }
    function priorityQue(jsonObj){
        jsonObj.then(data =>{
            // console.log(data)
            let jsonKeys = Object.keys(data);
             jsonKeys.forEach(key=>{

                 secondReadyOutput.innerHTML +=data[key];
                 secondReadyOutput.innerHTML +="; ";

             })
        })
    }

    function reverseQue(jsonObj){
        jsonObj.then(data =>{
            // console.log(data)
            let jsonKeys = Object.keys(data);
            jsonKeys.forEach(key=>{

                secondReadyOutput.innerHTML +=data[key];
                secondReadyOutput.innerHTML +="; ";

            })
        })
    }




