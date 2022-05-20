class BasicQue{
    constructor(sortCh) {
        this.sortCh = sortCh;
    }
    firstUplBtn = document.getElementById("firstUplBtn")
    firstOutput = document.getElementById("firstOutput")
    firstReadyOutput = document.getElementById("firstReadyOutput")

    //sortCh = alpha / addingSort / surnameLong
    variableSet(){
        firstUplBtn.addEventListener('click' ,()=>this.sortQue(this.childQue));

    }
    childQue = ["Nazarenko", "Kylakov", "Kvitnitski", "Tofetskiy", "Zhor"]
    // childQue = [5, 2, 1, 10, 0]
    sortQue(childQue){
        if(this.sortCh==="alpha"){
            let alphaResult = childQue.sort()
            console.log("Відсортовано по алфавіту: " + alphaResult)

        } else if(this.sortCh==="addingSort"){
            console.log("Відсортовано по порядку додавання: " +childQue)

        }else if(this.sortCh==="surnameLong"){
            for(let i=0, tmp; i<childQue.length-1; i++){
                for(let j=0; j<childQue.length-1; j++){
                    if(childQue[j].length>childQue[j+1].length){
                        tmp=childQue[j];
                        childQue[j]=childQue[j+1];
                        childQue[j+1]=tmp;
                    }
                }
            }
            console.log(childQue)
        }

    }
}




let basicLogger = new BasicQue("alpha");
let addLogger = new BasicQue("addingSort");
let surNameLogger = new BasicQue("surnameLong");
basicLogger.variableSet()
addLogger.variableSet()
surNameLogger.variableSet()
