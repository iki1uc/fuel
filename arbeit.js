// arbeit.js — Result-Aktivator: Ergebnis zählt mehr als Zeit

class Arbeit {

    constructor(){
        this.stage = 3;
        this.mode = "CALL";
        this.pipe = null;
        this.result = null;
        this.cplus = 1.0;
        this.mass = null;

        // Resultat-Ebene
        this.resultMeta = {
            valid: false,
            empty: true,
            priority: "RESULT",
            flow: "NONE"
        };
    }

    // c+ setzen
    setCPlus(value){
        this.cplus = value;
        return this.cplus;
    }

    // Stage setzen
    setStage(stage){
        this.stage = stage * this.cplus;
    }

    // Ergebnis-Meta aktualisieren
    updateResultMeta(){
        this.resultMeta.valid = this.result !== null;
        this.resultMeta.empty = this.result === null;
        this.resultMeta.flow = this.mode === "CALL" ? "FORWARD" : "BACKWARD";
        this.resultMeta.priority = "RESULT";
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

        this.updateResultMeta();
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

        this.updateResultMeta();
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
            mass: this.mass,
            resultMeta: this.resultMeta
        };
    }
}

window.Arbeit = new Arbeit();
