class Corridor {

    constructor(){
        this.station = null;     // Stationsnummer
        this.stage = null;       // Stage im Korridor
        this.cplus = 1.0;        // Korrektor
    }

    // c+ setzen
    setCPlus(v){
        this.cplus = v;
        return this.cplus;
    }

    // Stationsnummer setzen
    setStation(number){
        this.station = number * this.cplus;
        return this.station;
    }

    // Stationsnummer holen
    getStation(){
        return this.station;
    }

    // Stage setzen
    setStage(stage){
        this.stage = stage * this.cplus;
        return this.stage;
    }

    // Stage holen
    getStage(){
        return this.stage;
    }

    // Übersetzer: 3×1 → 3×3 → 9×9 → Corridor
    translate(inputSize){
        let base;

        switch(inputSize){
            case 3:   base = 3; break;     // slice 3×1
            case 9:   base = 9; break;     // slice 3×3
            case 81:  base = 81; break;    // core 9×9
            case 243: base = 243; break;   // corridor level 1
            case 729: base = 729; break;   // corridor level 2
            default:
                throw new Error(`Unbekannte Stationsgröße: ${inputSize}`);
        }

        // c+ wirkt auf die Übersetzung
        return base * this.cplus;
    }
}

window.Corridor = new Corridor();
