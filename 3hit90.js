class Hit3to90 {

    constructor(){
        this.stage = 3;          // Startstage
        this.hit = 0;            // Impact-Wert
        this.element = "ICE";    // ICE / FEUER
        this.honor = "0%";       // 1% - 100%
        this.cplus = 1.0;        // c+ = Korrektor
    }

    // Korrektor setzen
    setCPlus(value){
        this.cplus = value;
    }

    // Werte aus Urne übernehmen
    loadFromUrne(entry){
        this.element = entry.element;
        this.honor = entry.honor;
    }

    // Impact berechnen (Honor + ICE/FEUER + c+)
    calculateHit(){
        const honorValue = parseInt(this.honor);

        let baseHit = honorValue;

        if(this.element === "FEUER"){
            baseHit *= 1.2;      // Verstärkung
        } else {
            baseHit *= 0.8;      // Stabilisierung
        }

        // c+ Korrektor anwenden
        this.hit = baseHit * this.cplus;

        return this.hit;
    }

    // MassHWTranswarp einbauen
    applyMass(){
        MassHWTranswarp.set(
            this.stage,          // Masse = Stage
            this.hit,            // Geschwindigkeit = Impact
            TimeHW.delta         // Zeit = Delta
        );

        MassHWTranswarp.setElement(this.element);

        const mass = MassHWTranswarp.compute();
        this.hit = mass.accel;   // Beschleunigung ersetzt Impact

        return mass;
    }

    // Übergabe prüfen (Transwarp statt 90-Grenze)
    evaluate(){
        this.calculateHit();
        const mass = this.applyMass();

        const next = TranswarpStage.next();   // Stage * 3

        return {
            stage: this.stage,
            hit: this.hit,
            accel: mass.accel,
            impuls: mass.impuls,
            kraft: mass.kraft,
            energie: mass.energie,
            nextStage: next,
            element: this.element,
            cplus: this.cplus
        };
    }
}

window.Hit3to90 = new Hit3to90();
