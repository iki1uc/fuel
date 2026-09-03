class Flanke {

    constructor(){
        this.mode = "ICE";     // stabil
        this.stage = null;     // aktuelle Stage
        this.target = null;    // Übergabe-Ziel
        this.cplus = 1.0;      // c+ = Korrektor
    }

    // c+ setzen
    setCPlus(value){
        this.cplus = value;
        return this.cplus;
    }

    // Modus setzen (ICE / FEUER)
    setMode(mode){
        if(mode !== "ICE" && mode !== "FEUER"){
            throw new Error(`Ungültiger Modus: ${mode}`);
        }
        this.mode = mode;
    }

    // Stage setzen
    setStage(stage){
        this.stage = stage * this.cplus;   // c+ wirkt hier
    }

    // Übergabe vorbereiten
    prepare(target){
        this.target = target * this.cplus; // c+ wirkt auch hier

        return {
            mode: this.mode,
            from: this.stage,
            to: this.target,
            cplus: this.cplus
        };
    }
}

window.Flanke = new Flanke();
