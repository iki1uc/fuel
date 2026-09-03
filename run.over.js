// run.over.js — Pipeline-Übersteuerung · GOLDENE SECHS · XYX-Zentrum

class RunOver {

    constructor(){
        this.active = false;
        this.flow = "our";     // Standardfluss
        this.runLevel = 3;     // Startstage
        this.over = false;     // Übersteuerung aktiv?
    }

    // Pipeline initialisieren
    init(config){
        this.flow = config.flow;
        this.runLevel = config.run;
        this.over = config.over;

        this.active = true;
    }

    // GOLDENE SECHS für jede Pipeline-Operation
    meta(){
        return {
            innen: state.a81,
            mech: state.zahnrad,
            nano: state.a81 / 9,
            rein: Math.sqrt(state.a81),
            energy: TimeHW.delta,
            industry: {
                pipe3: A81_AXIS.pipe3,
                pipe6: A81_AXIS.pipe6,
                pipe9: A81_AXIS.pipe9,
                pipe12: A81_AXIS.pipe12
            }
        };
    }

    // Pipeline-Durchlauf
    run(){
        if(!this.active){
            throw new Error("run.over nicht initialisiert!");
        }

        const stageInfo = StagePipeline.run(this.runLevel);

        return {
            flow: this.flow,
            over: this.over,
            stage: stageInfo,
            meta: this.meta()
        };
    }
}

window.RunOver = new RunOver();
