class SLICE_3x1 {

    constructor(){
        this.size = 3;
        this.line = [];
        this.cplus = 1.0;     // c+ = Korrektor
    }

    // c+ setzen
    setCPlus(value){
        this.cplus = value;
        return this.cplus;
    }

    // QI – reine Index-Schaltung
    qi(i){
        if(i < 0 || i >= this.size){
            throw new Error(`Index out of range: i=${i}`);
        }
        return i;
    }

    // IQQ – 3-Zustands-Schaltung
    iqq(i){
        return this.qi(i) % 3;
    }

    // OCTA – 8-Wege-Intelligenz
    octaRoute(qi){
        return qi % 8;
    }

    // PIPE 3 – tri-routing
    pipeTri(qi){
        return qi % 3;
    }

    // BUILD – erzeugt die 3×1 Linie (mit c+)
    build(){
        this.line = [];

        for(let i=0; i<3; i++){
            const qi  = this.qi(i);
            const iqq = this.iqq(i);

            // c+ Korrektor anwenden
            const qi_c   = qi  * this.cplus;
            const iqq_c  = iqq * this.cplus;
            const octa_c = this.octaRoute(qi) * this.cplus;
            const pipe_c = this.pipeTri(qi) * this.cplus;

            this.line.push({
                qi: qi_c,
                iqq: iqq_c,
                octa: octa_c,
                pipe3: pipe_c,
                cplus: this.cplus
            });
        }

        return this.line;
    }
}

window.SLICE_3x1 = new SLICE_3x1();
