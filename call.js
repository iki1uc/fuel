class CallPipeline {

    constructor(){
        this.order = [3, 9, 81, 243, 729];
        this.cplus = 1.0;   // c+ = Korrektor
    }

    // c+ setzen
    setCPlus(value){
        this.cplus = value;
        return this.cplus;
    }

    // HWpipeline (Grundlauf)
    pipeline(stage){
        const s = stage * this.cplus;

        return {
            pipe: "HWpipeline",
            current: s,
            next: this.next(s),
            order: this.order.map(v => v * this.cplus),
            cplus: this.cplus
        };
    }

    // HWpipeline1 (ein Schritt)
    pipeline1(stage){
        const s = stage * this.cplus;

        return {
            pipe: "HWpipeline1",
            current: s,
            next: this.next(s),
            cplus: this.cplus
        };
    }
 
    // HWpipeline12 (12 Schritte)
    pipeline12(stage){
        const chain = [];
        let current = stage * this.cplus;

        for(let i = 0; i < 12; i++){
            current = this.next(current);
            chain.push(current);
            if(current === null) break;
        }

        return {
            pipe: "HWpipeline12",
            start: stage * this.cplus,
            chain: chain,
            cplus: this.cplus
        };
    }

    // Hilfsfunktion
    next(stage){
        const index = this.order.indexOf(stage / this.cplus);
        return this.order[index + 1]
            ? this.order[index + 1] * this.cplus
            : null;
    }
}

window.Call = new CallPipeline();
