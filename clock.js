class ClockHW {

    constructor(){
        this.clock = 60;      // Standard-Takt
        this.speed = 1;       // Zeitraffer
        this.curve = 1;       // Krümmungsgrad
    }

    // Takt setzen
    setClock(value){
        this.clock = value;
    }

    // Zeitraffer setzen
    setSpeed(value){
        this.speed = value;
    }

    // Krümmung setzen
    setCurve(value){
        this.curve = value;
    }

    // Zeitberechnung
    compute(timeDelta){
        let t = timeDelta / this.clock;
        t = t * this.speed;
        t = Math.pow(t, this.curve);
        return t;
    }

    // Zahl → Weisung
    directive(value){
        if(value < 10) return "LOW";
        if(value < 50) return "MID";
        if(value < 90) return "HIGH";
        return "MAX";
    }
}

window.ClockHW = new ClockHW();
