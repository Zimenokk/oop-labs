let thirdUPL = document.getElementById("thirdUPL")
let thirdQUE = document.getElementById("thirdQUE")

let firstOutput = document.getElementById("firstOutput")
let firstReadyOutput = document.getElementById("firstReadyOutput")
let secondOutput = document.getElementById("secondOutput")
let secondReadyOutput = document.getElementById("secondReadyOutput")
let thirdOutput = document.getElementById("thirdOutput")
let thirdReadyOutput = document.getElementById("thirdReadyOutput")

let basicLink = "https://zimenokk.github.io/oop-labs/lab2/basicQueue.json"

function jsonUPL(link){
    var requestURL = link;
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    request.onload = function() {
        uploadedQue = request.response;
        basicQueueAssign(uploadedQue)
    }
}
jsonUPL(basicLink)
jsonUPL(basicLink)
jsonUPL(basicLink)
function basicQueueAssign(jsonObj){ //перша черга
    let count=0;
    for (let key in jsonObj){
        firstOutput.innerHTML +=jsonObj[key];
        firstOutput.innerHTML +="; ";
        firstReadyOutput.innerHTML +=jsonObj[key];
        firstReadyOutput.innerHTML +="; ";
        // count++
    }
}


