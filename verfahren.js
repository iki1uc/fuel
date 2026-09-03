class Verfahren {

    constructor(){
        this.stage = 3;            // Startstage
        this.mode = "TRANSWARP";   // TRANSWARP / CONTINUUM / PIPELINE / BERLIN
        this.element = "ICE";      // ICE / FEUER
        this.last = {};            // Letztes Ergebnis
    }

    // Stage setzen (jede Zahl erlaubt)
    setStage(value){
        this.stage = value;
        return this.stage;
    }

    // Modus setzen
    setMode(mode){
        this.mode = mode;
        return this.mode;
    }

    // Element setzen
    setElement(element){
        this.element = element;
        HitAllxAll.setElement(element);
        MassHWTranswarp.setElement(element);
        return this.element;
    }

    // TRANSWARP-Verfahren
    runTranswarp(){
        const s = TranswarpStage.set(this.stage);
        const next = TranswarpStage.next();
        const mass = MassHWTranswarp.compute();

        this.last = {
            verfahren: "TRANSWARP",
            stage: s,
            nextStage: next,
            mass: mass.accel,
            impuls: mass.impuls,
            kraft: mass.kraft,
            energie: mass.energie
        };

        return this.last;
    }

    // CONTINUUM-Verfahren
    runContinuum(){
        const s = TranswarpStage.set(this.stage);
        const fold = TranswarpStage.continuum();
        const mass = MassHWTranswarp.compute();

        this.last = {
            verfahren: "CONTINUUM",
            stage: s,
            continuum: fold,
            mass: mass.accel,
            impuls: mass.impuls,
            kraft: mass.kraft,
            energie: mass.energie
        };

        return this.last;
    }

    // PIPELINE-Verfahren
    runPipeline(){
        const result = ContinuumPipeline.run(this.stage);

        this.last = {
            verfahren: "PIPELINE",
            stage: result.stage,
            hit: result.hit,
            mass: result.mass.accel,
            impuls: result.mass.impuls,
            kraft: result.mass.kraft,
            energie: result.mass.energie
        };

        return this.last;
    }

    // BERLIN-Schiene
    runBerlin(){
        const boot = MASTERBOOT.boot();
        const over = Overdrive.run();

        this.last = {
            verfahren: "BERLIN",
            boot,
            overdrive: over.overdrive,
            accel: over.accel,
            hit: over.hit,
            nextStage: over.nextStage
        };

        return this.last;
    }

    // Hauptverfahren
    run(){
        switch(this.mode){
            case "TRANSWARP": return this.runTranswarp();
            case "CONTINUUM": return this.runContinuum();
            case "PIPELINE": return this.runPipeline();
            case "BERLIN": return this.runBerlin();
            default:
                return { error: "Unbekanntes Verfahren" };
        }
    }
}

window.Verfahren = new Verfahren();
