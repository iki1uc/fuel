// build.js — Build mit Whitelist für d e i n o r s u v

class Build {

    constructor(){
        this.stage = 0;
        this.ready = false;
        this.chain = [3, 9, 81, 243, 729];
        this.cplus = 1.0;

        // Nur diese Zeichen sind erlaubt
        this.whitelist = ["d","e","i","n","o","r","s","u","v"];
    }

    // c+ setzen
    setCPlus(value){
        this.cplus = value;
        return this.cplus;
    }

    // Zeichen prüfen
    allow(char){
        return this.whitelist.includes(char);
    }

    // Stage setzen – aber nur wenn Zeichen erlaubt
    setStageFromChar(char){
        if(!this.allow(char)){
            return {
                ok: false,
                error: "CHAR_NOT_ALLOWED",
                allowed: this.whitelist
            };
        }

        // Zeichen → Index → Stage
        const index = this.whitelist.indexOf(char);
        this.stage = this.chain[index % this.chain.length] * this.cplus;

        return {
            ok: true,
            char,
            stage: this.stage
        };
    }

    // Initialisiert das Bewusstsein
    init(){
        this.ready = true;

        return {
            stage: this.stage * this.cplus,
            next: this.chain[0] * this.cplus,
            chain: this.chain.map(v => v * this.cplus),
            cplus: this.cplus
        };
    }

    // Gibt die nächste Stage zurück
    nextStage(current){
        const index = this.chain.indexOf(current / this.cplus);
        if(index === -1) return null;

        const next = this.chain[index + 1];
        return next ? next * this.cplus : null;
    }
}

window.Build = new Build();
