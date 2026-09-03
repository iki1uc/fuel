class RecallPipeline {

    constructor(){
        this.order = [3, 9, 81, 243, 729];
    }

    // HWpipeline3 (3 Schritte)
    pipeline3(stage){
        return this.build(stage, 3, "HWpipeline3");
    }

    // HWpipeline6 (6 Schritte)
    pipeline6(stage){
        return this.build(stage, 6, "HWpipeline6");
    }

    // HWpipeline9 (9 Schritte)
    pipeline9(stage){
        return this.build(stage, 9, "HWpipeline9");
    }

    // Hilfsfunktion
    build(stage, steps, name){
        const chain = [];
        let current = stage;

        for(let i = 0; i < steps; i++){
            current = this.next(current);
            chain.push(current);
            if(current === null) break;
        }

        return {
            pipe: name,
            start: stage,
            chain: chain
        };
    }

    next(stage){
        const index = this.order.indexOf(stage);
        return this.order[index + 1] || null;
    }
}

window.Recall = new RecallPipeline();
const energy = MassHW.calcEnergie(TimeHW.delta);
