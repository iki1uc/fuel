class StagePipeline {

    constructor(){
        this.stages = [3, 9, 81, 243, 729];
    }

    // Prüft, ob Stage gültig ist
    isValid(stage){
        return this.stages.includes(stage);
    }

    // Gibt die nächste Stage zurück
    next(stage){
        const index = this.stages.indexOf(stage);
        if(index === -1) throw new Error(`Ungültige Stage: ${stage}`);
        return this.stages[index + 1] || null;
    }

    // Gibt die vorherige Stage zurück
    prev(stage){
        const index = this.stages.indexOf(stage);
        if(index <= 0) return null;
        return this.stages[index - 1];
    }

    // Allgemeine Übergabe zwischen zwei Stages
    transfer(fromStage, data){
        if(!this.isValid(fromStage)){
            throw new Error(`Ungültige Stage: ${fromStage}`);
        }

        const toStage = this.next(fromStage);

        return {
            from: fromStage,
            to: toStage,
            payload: data
        };
    }

    // Pipeline-Durchlauf
    run(stage){
        if(!this.isValid(stage)){
            throw new Error(`Ungültige Stage: ${stage}`);
        }

        return {
            current: stage,
            next: this.next(stage),
            prev: this.prev(stage)
        };
    }
}

window.StagePipeline = new StagePipeline();
