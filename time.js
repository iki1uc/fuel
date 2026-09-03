class TimeHW {

    constructor(){
        this.start   = performance.now();
        this.last    = this.start;
        this.now     = this.start;
        this.delta   = 0;
        this.elapsed = 0;

        // GOLDENE SECHS
        this.meta = {
            innen: 0,
            mech: 0,
            nano: 0,
            rein: 0,
            energy: 0,
            stage: 0
        };
    }

    update(){
        this.now = performance.now();
        this.delta = this.now - this.last;
        this.elapsed = this.now - this.start;
        this.last = this.now;

        // GOLDENE SECHS aktualisieren
        this.meta.innen  = state.a81;
        this.meta.mech   = state.zahnrad;
        this.meta.nano   = state.a81 / 9;
        this.meta.rein   = Math.sqrt(state.a81);
        this.meta.stage  = Stage.get().stage;

        // Energie aus axis.matrix
        let energy = 0;
        A81_AXIS.matrix.forEach(row => {
            row.forEach(iqq => {
                MassHWTranswarp.set(iqq, iqq, this.delta);
                energy += MassHWTranswarp.compute();
            });
        });
        this.meta.energy = energy;

        return {
            now: this.now,
            delta: this.delta,
            elapsed: this.elapsed,
            meta: this.meta
        };
    }

    factor(clock){
        return this.delta / clock;
    }
}

window.TimeHW = new TimeHW();
