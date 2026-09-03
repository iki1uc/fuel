class RaidPipeline {

    constructor(){
        this.stages = [3, 9, 81, 243, 729];

        // ICE = stabil, FEUER = aktiv
        this.mode = "ICE"; 
    }

    // Modus setzen
    setMode(mode){
        if(mode !== "ICE" && mode !== "FEUER"){
            throw new Error(`Ungültiger RAID-Modus: ${mode}`);
        }
        this.mode = mode;
    }

    // Stage gültig?
    isValid(stage){
        return this.stages.includes(stage);
    }

    // Nächste Stage
    next(stage){
        const index = this.stages.indexOf(stage);
        if(index === -1) throw new Error(`Ungültige Stage: ${stage}`);
        return this.stages[index + 1] || null;
    }

    // Vorherige Stage
    prev(stage){
        const index = this.stages.indexOf(stage);
        if(index <= 0) return null;
        return this.stages[index - 1];
    }

    // RAID-Übergabe (ICE/FEUER)
    transfer(stage, payload){
        if(!this.isValid(stage)){
            throw new Error(`Ungültige Stage: ${stage}`);
        }

        const nextStage = this.next(stage);

        return {
            mode: this.mode,
            from: stage,
            to: nextStage,
            payload: payload
        };
    }

    // RAID-Pipeline-Durchlauf
    run(stage, payload){
        if(!this.isValid(stage)){
            throw new Error(`Ungültige Stage: ${stage}`);
        }

        return {
            mode: this.mode,
            current: stage,
            next: this.next(stage),
            prev: this.prev(stage),
            payload: payload
        };
    }
}

window.RaidPipeline = new RaidPipeline();

