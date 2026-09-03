class Stage {

    constructor(){
        this.stage = null;
        this.meta  = null;   // GOLDENE SECHS
    }

    detect(size){
        switch(size){
            case 3:   return 3;
            case 9:   return 9;
            case 81:  return 81;
            case 243: return 243;
            case 729: return 729;
            default:
                throw new Error(`Unbekannte Stage-Größe: ${size}`);
        }
    }

    // GOLDENE SECHS – vollständige Stage-Balance
    buildMeta(axis){
        return {
            innen: state.a81,
            mech: state.zahnrad,
            nano: state.a81 / 9,
            rein: Math.sqrt(state.a81),
            pipes: {
                pipe3: axis.pipe3,
                pipe6: axis.pipe6,
                pipe9: axis.pipe9,
                pipe12: axis.pipe12
            },
            energy: axis.matrix.map(row =>
                row.map(iqq => ({
                    qi: iqq,
                    iqq: iqq,
                    delta: TimeHW.delta
                }))
            )
        };
    }

    set(size){
        const axis = A81_AXIS.build();
        this.stage = this.detect(size);
        this.meta  = this.buildMeta(axis);
    }

    get(){
        return {
            stage: this.stage,
            meta:  this.meta
        };
    }
}

window.Stage = new Stage();
