// corridor.js — Station-Safe · GOLDENE SECHS · No-Loss-Modus

class Corridor {

    constructor(){
        this.station = null;
        this.stage = null;
        this.cplus = 1.0;

        // GOLDENE SECHS Meta
        this.meta = {
            innen: 0,
            mech: 0,
            nano: 0,
            rein: 0,
            energy: 0,
            industry: null
        };

        // Sicherheitsflag
        this.safe = true;
    }

    // c+ setzen
    setCPlus(v){
        this.cplus = v;
        return this.cplus;
    }

    // Stationsnummer setzen
    setStation(number){
        this.station = number * this.cplus;
        this.updateMeta();
        return this.station;
    }

    // Stage setzen
    setStage(stage){
        this.stage = stage * this.cplus;
        this.updateMeta();
        return this.stage;
    }

    // GOLDENE SECHS aktualisieren
    updateMeta(){
        this.meta.innen  = state.a81;
        this.meta.mech   = state.zahnrad;
        this.meta.nano   = state.a81 / 9;
        this.meta.rein   = Math.sqrt(state.a81);
        this.meta.energy = TimeHW.delta;
        this.meta.industry = {
            pipe3: A81_AXIS.pipe3,
            pipe6: A81_AXIS.pipe6,
            pipe9: A81_AXIS.pipe9,
            pipe12: A81_AXIS.pipe12
        };

        // Safety: kein Schwund
        this.safe = (
            this.station !== null &&
            this.stage !== null &&
            this.meta.innen > 0 &&
            this.meta.mech >= 0
        );
    }

    // Stationsnummer holen
    getStation(){
        return this.station;
    }

    // Stage holen
    getStage(){
        return this.stage;
    }

    // Übersetzer: 3 → 9 → 81 → 243 → 729
    translate(inputSize){
        const map = {
            3:   3,
            9:   9,
            81:  81,
            243: 243,
            729: 729
        };

        if(!(inputSize in map)){
            throw new Error(`Unbekannte Stationsgröße: ${inputSize}`);
        }

        return map[inputSize] * this.cplus;
    }
}

window.Corridor = new Corridor();
