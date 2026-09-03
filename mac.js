class MAC {

    constructor(){
        this.cplus = 1.0;      // Korrektor
        this.back = null;      // Rückimpuls
        this.mode = "BACK";    // später CALLBACK
    }

    // c+ setzen
    setCPlus(v){
        this.cplus = v;
        return this.cplus;
    }

    // ClockHW.compute → MAC.receive
    receive(timeValue){
        // c+ wirkt hier: wenn nicht mehr geht → mach weniger
        const corrected = timeValue * this.cplus;

        this.back = corrected;

        return {
            mode: this.mode,
            raw: timeValue,
            corrected: corrected,
            directive: ClockHW.directive(corrected),
            cplus: this.cplus
        };
    }

    // später echter Callback
    callback(stage){
        return stage * this.cplus;
    }
}

window.MAC = new MAC();
