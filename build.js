class Build {

    constructor(){
        this.stage = 0;        
        this.ready = false;    
        this.chain = [3, 9, 81, 243, 729]; 
        this.cplus = 1.0;      // c+ = Korrektor
    }

    // c+ setzen
    setCPlus(value){
        this.cplus = value;
        return this.cplus;
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
