class Pipe {

    constructor(){
        this.stages = [3, 9, 81, 243, 729];
    }

    // Gibt die nächste Stage zurück
    next(current){
        const index = this.stages.indexOf(current);
        if(index === -1) throw new Error(`Unbekannte Stage: ${current}`);

        // Wenn letzte Stage erreicht → kein weiterer Schritt
        if(index === this.stages.length - 1){
            return null;
        }

        return this.stages[index + 1];
    }

    // Gibt die vorherige Stage zurück
    prev(current){
        const index = this.stages.indexOf(current);
        if(index <= 0) return null;
        return this.stages[index - 1];
    }

    // Prüft, ob Stage gültig ist
    isValid(stage){
        return this.stages.includes(stage);
    }

    // Pipeline‑Durchlauf
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

window.Pipe = new Pipe();
