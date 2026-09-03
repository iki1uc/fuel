class Schuss {

    constructor(){
        this.ready = false;
        this.stage = null;
        this.nextStage = null;
        this.payload = null;

        this.meta = null; // GOLDENE SECHS
    }

    // Zünder laden
    load(flankeData){
        this.stage = flankeData.from;
        this.nextStage = flankeData.to;
        this.payload = flankeData;

        // GOLDENE SECHS
        this.meta = {
            innen: state.a81,
            mech: state.zahnrad,
            nano: state.a81 / 9,
            rein: Math.sqrt(state.a81),
            energy: TimeHW.delta,
            industry: {
                pipe9: A81_AXIS.pipe9,
                pipe12: A81_AXIS.pipe12
            }
        };

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
            mode: this.payload.mode,
            honor: this.payload.honor,
            meta: this.meta,
            payload: this.payload
        };
    }
}

window.Schuss = new Schuss();
