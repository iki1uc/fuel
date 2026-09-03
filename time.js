class TimeHW {

    constructor(){
        this.start = performance.now();
        this.last = this.start;
        this.now = this.start;
        this.delta = 0;
        this.elapsed = 0;
    }

    // Zeit aktualisieren
    update(){
        this.now = performance.now();
        this.delta = this.now - this.last;
        this.elapsed = this.now - this.start;
        this.last = this.now;

        return {
            now: this.now,
            delta: this.delta,
            elapsed: this.elapsed
        };
    }

    // Zeitfaktor (time / clock)
    factor(clock){
        return this.delta / clock;
    }
}

window.TimeHW = new TimeHW();
