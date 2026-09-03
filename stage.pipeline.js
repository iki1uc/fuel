class StagePipeline {

    constructor(){
        // Vollständige Stages
        this.stages = [3, 9, 81, 243, 729, 2187, 6561];
    }

    isValid(stage){
        return this.stages.includes(stage);
    }

    next(stage){
        const index = this.stages.indexOf(stage);
        if(index === -1) throw new Error(`Ungültige Stage: ${stage}`);
        return this.stages[index + 1] || null;
    }

    prev(stage){
        const index = this.stages.indexOf(stage);
        if(index <= 0) return null;
        return this.stages[index - 1];
    }

    // GOLDENE SECHS für jede Stage
    meta(stage){
        return {
            innen: state.a81,
            mech: state.zahnrad,
            nano: state.a81 / 9,
            rein: Math.sqrt(state.a81),
            energy: TimeHW.delta,
            industry: {
                pipe3: A81_AXIS.pipe3,
                pipe6: A81_AXIS.pipe6,
                pipe9: A81_AXIS.pipe9,
                pipe12: A81_AXIS.pipe12
            }
        };
    }

    transfer(fromStage, data){
        if(!this.isValid(fromStage)){
            throw new Error(`Ungültige Stage: ${fromStage}`);
        }

        const toStage = this.next(fromStage);

        return {
            from: fromStage,
            to: toStage,
            payload: data,
            meta: this.meta(fromStage)
        };
    }

    run(stage){
        if(!this.isValid(stage)){
            throw new Error(`Ungültige Stage: ${stage}`);
        }

        return {
            current: stage,
            next: this.next(stage),
            prev: this.prev(stage),
            meta: this.meta(stage)
        };
    }
}

window.StagePipeline = new StagePipeline();
