class Gleichung {

    constructor(){
        this.stage = 3;          // Startwert
        this.transwarp = true;   // Transwarpkanal aktiv
        this.continuum = false;  // Continuum-Faltung
    }

    // Jede Zahl wird Stage
    setStage(value){
        this.stage = value;
        return this.stage;
    }

    // Transwarpkanal: Stage * 3
    transwarpStep(){
        if(!this.transwarp) return this.stage;
        return this.stage * 3;
    }

    // Continuum: Stage²
    continuumStep(){
        if(!this.continuum) return this.stage;
        return this.stage ** 2;
    }

    // Massenbeschleuniger einbauen
    mass(){
        MassHWTranswarp.set(
            this.stage,
            HitAllxAll.hit(this.stage),
            TimeHW.delta
        );
        return MassHWTranswarp.compute();
    }

    // Gesamter Transwarp-Zyklus
    run(){
        const s1 = this.setStage(this.stage);
        const s2 = this.transwarpStep();
        const s3 = this.continuumStep();
        const m  = this.mass();

        return {
            stage: this.stage,
            transwarp: s2,
            continuum: s3,
            mass: m.accel,
            impuls: m.impuls,
            kraft: m.kraft,
            energie: m.energie
        };
    }
}

window.Gleichung = new Gleichung();
