class Printer {
    constructor(isOn, papersCount, paintCount, warrantyPeriod, isScaner, isWifiConnection) {
        this.isOn = isOn; // чи включений принтер
        this.papersCount = papersCount; // кількість паперу
        this.paintCount = paintCount; // кількість фарби
        this.warrantyPeriod = warrantyPeriod; // кінець гарантії
        this.isScaner = isScaner; // наявність сканера
        this.isWifiConnection = isWifiConnection; // тип підключення принтеру до пристрою користувача
    }

    #operSystem = "Linux";

    startWorking() {
        if (this.isOn == true) {
            alert("Hello, your printer is ON. \r Your current OS is: " + this.#operSystem + "." + "\r" + this.wifiProperies() + "\rYour warantee period ends in " + this.warrantyPeriod + ".")
            if (this.isScaner == true) {
                this.printAndScan()
            } else {
                this.startPrinting()
            }
        } else {
            alert("Turn on your printer, please.")
            return
        }

    }

    printAndScan() {
        let userChoise = prompt("Please select an action. \r" + "\"Print\" to print something, \"Scan\" to scan something.")
        if (userChoise == "Print" || userChoise == "print") {
            //перевірка паперу та друк
            this.startPrinting()
            // alert("Printing")
        } else if (userChoise == "Scan" || userChoise == "scan") {
            //scan
            this.startScanning()


        } else {
            alert("Please choose one of the two options.")
            this.printAndScan()
        }
    }



    startPrinting() { //початок друку
        if (this.paintCount > 0 && this.papersCount > 0) {
            alert("Printing has been started at:  " + this.getTime() + "\r You have " + this.papersCount + " sheats of paper and " + this.paintCount + "ml of paint.");
            this.processStocks();
            alert("Printing has been ended at:  " + this.getTime() + "\r You have " + this.papersCount + " sheats of paper and " + this.paintCount + "ml of paint.");
            this.startWorking();
        } else {
            alert("Oops, looks like you don't have enough paint or paper. Please restock the paper and ink in your printer.");
            this.startWorking()
        }
    }

    startScanning() {
        let actualTime = new Date();
        alert("Scanning has been started at:  " + this.getTime());
        alert("Scanning has been ended at:  " + this.getTime() + "\r You have " + this.papersCount + " sheats of paper and " + this.paintCount + "ml of paint.");
        this.startWorking();
    }

    paperPrintCount() { //повертає рандомну кілкість паперу за один друк
        let minPapersCount = 1;
        let maxPapersCount = 15;
        let paperRandomCount = Math.floor(Math.random() * (maxPapersCount - minPapersCount + 1)) + minPapersCount;
        return paperRandomCount
    }

    processStocks() { //зменшує кількість фарби та паперу в принтері
        let paintPage = 1.2;
        if (this.paintCount >= (paintPage * this.paperPrintCount()) && this.papersCount>=this.paperPrintCount()){
            this.paintCount = (this.paintCount - paintPage * this.paperPrintCount()).toFixed(1);
            this.papersCount -= this.paperPrintCount();
        }else{
            alert("You don't have enough paper and/or ink to print the document you want.")
            this.startWorking()
        }
    }

    wifiProperies() { //налаштування підключення
        if (this.isWifiConnection == true) {
            return ("You can try connect your printer to wifi.")
        } else {
            return ("You can only connect your printer using the USB port.")
        }
    }

    static getTime() {
        let myTime = new Date()
        let time = myTime.getHours() + ":" + myTime.getUTCMinutes()
        return time
    }
}

let samsungPrinter = new Printer(true, 100, 100, "2 years", false, false)

