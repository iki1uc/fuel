class Flanke {

    constructor(){
        this.mode = "ICE";       // ICE oder FEUER
        this.stage = null;       // aktuelle Stage
        this.target = null;      // Übergabe-Ziel
        this.honor = null;       // Ruhm-Level aus der Urne
        this.hit = false;        // Hardware-Treffer
    }

    // Übernimmt die Werte aus einem Urnen-Eintrag
    loadFromUrne(entry){
        this.stage = entry.stage;
        this.mode = entry.element;   // ICE / FEUER
        this.honor = entry.honor;
        this.hit = true;             // Hardware-Treffer ausgelöst
    }

    // Übergabe vorbereiten (Hardware-Stil)
    prepare(targetStage){
        this.target = targetStage;

        return {
            mode: this.mode,
            from: this.stage,
            to: this.target,
            honor: this.honor,
            hit: this.hit           // zeigt: Treffer ist aktiv
        };
    }

    // Hardware-Treffer zurücksetzen
    reset(){
        this.hit = false;
    }
}

window.Flanke = new Flanke();
