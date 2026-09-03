class MassHW {

    constructor(){
        this.m = 1;        // Masse
        this.v = 0;        // Geschwindigkeit
        this.t = 1;        // Zeit
        this.impuls = 0;
        this.kraft = 0;
        this.energie = 0;
        this.accel = 0;    // Beschleunigung
        this.element = "ICE"; // ICE / FEUER
    }

    setElement(element){
        this.element = element;
    }

    setValues(m, v, t){
        this.m = m;
        this.v = v;
        this.t = t;
    }

    compute(){
        // Impuls
        this.impuls = this.m * this.v;

        // Kraft
        this.kraft = this.impuls / this.t;

        // Energie
        this.energie = this.kraft * this.t;

        // Beschleunigung
        this.accel = this.energie / this.m;

        // ICE stabilisiert, FEUER verstärkt
        if(this.element === "ICE"){
            this.accel *= 0.8;
        } else {
            this.accel *= 1.2;
        }

        return {
            impuls: this.impuls,
            kraft: this.kraft,
            energie: this.energie,
            accel: this.accel,
            element: this.element
        };
    }
}

window.MassHW = new MassHW();
