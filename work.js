class Work {

    constructor(){
        this.stage = 3;              // Startstage
        this.mode = "CALL";          // CALL oder RECALL
        this.pipeline = null;        // Pipeline-Name
        this.result = null;          // Ergebnis
    }

    // Pipeline auswählen (CALL)
    useCall(pipeName){
        this.mode = "CALL";
        this.pipeline = pipeName;

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

    // Pipeline auswählen (RECALL)
    useRecall(pipeName){
        this.mode = "RECALL";
        this.pipeline = pipeName;

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

    // Stage setzen
    setStage(stage){
        this.stage = stage;
    }

    // Ergebnis abrufen
    getResult(){
        return this.result;
    }
}

window.Work = new Work();
