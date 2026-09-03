class Arbeit {

    constructor(){
        this.stage = 3;          // Startstage
        this.mode = "CALL";      // CALL oder RECALL
        this.pipe = null;        // Pipeline-Name
        this.result = null;      // Ergebnis
        this.cplus = 1.0;        // c+ = Korrektor
        this.mass = null;        // MassHW-Objekt
    }

    // c+ setzen
    setCPlus(value){
        this.cplus = value;
        return this.cplus;
    }

    // Stage setzen
    setStage(stage){
        this.stage = stage * this.cplus;   // c+ wirkt hier
    }

    // CALL-Pipelines
    runCall(pipeName){
        this.mode = "CALL";
        this.pipe = pipeName;

        switch(pipeName){
            case "HWpipeline":
                this.result = Call.pipeline(this.stage);
                break;

            case "HWpipeline1":
                this.result = Call.pipeline1(this.stage);
                break;

            case "HWpipeline12":
                this.result = Call.pipeline12(this.stage);
                break;

            default:
                throw new Error(`Unbekannte CALL-Pipeline: ${pipeName}`);
        }

        return this.result;
    }

    // RECALL-Pipelines
    runRecall(pipeName){
        this.mode = "RECALL";
        this.pipe = pipeName;

        switch(pipeName){
            case "HWpipeline3":
                this.result = Recall.pipeline3(this.stage);
                break;

            case "HWpipeline6":
                this.result = Recall.pipeline6(this.stage);
                break;

            case "HWpipeline9":
                this.result = Recall.pipeline9(this.stage);
                break;

            default:
                throw new Error(`Unbekannte RECALL-Pipeline: ${pipeName}`);
        }

        return this.result;
    }

    // MassHW koppeln
    attachMassHW(mass){
        this.mass = mass;
        return this.mass;
    }

    // Ergebnis abrufen
    getResult(){
        return {
            mode: this.mode,
            pipe: this.pipe,
            stage: this.stage,
            result: this.result,
            cplus: this.cplus,
            mass: this.mass
        };
    }
}

window.Arbeit = new Arbeit();
