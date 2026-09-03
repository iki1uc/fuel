class Schuss {

    constructor(){
        this.ready = false;        // Zünder geladen?
        this.stage = null;         // aktuelle Stage
        this.nextStage = null;     // Zielstage
        this.payload = null;       // Daten aus Urne / Flanke
    }

    // Zünder laden (von Flanke)
    load(flankeData){
        this.stage = flankeData.from;
        this.nextStage = flankeData.to;
        this.payload = flankeData;

        this.ready = true;
    }

    // Zündung ausführen
    fire(){
        if(!this.ready){
            throw new Error("Schuss nicht bereit!");
        }

        return {
            fired: true,
            from: this.stage,
            to: this.nextStage,
            mode: this.payload.mode,     // ICE / FEUER
            honor: this.payload.honor,   // Ruhm-Level
            payload: this.payload
        };
    }
}

window.Schuss = new Schuss();
