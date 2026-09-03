class SLICE_3x3 {

    constructor(){
        this.size = 3;
        this.grid = [];
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

    // BUILD – erzeugt die 3×3 Matrix (mit c+)
    build(){
        this.grid = [];

        for(let row=0; row<3; row++){
            const line = [];

            for(let col=0; col<3; col++){
                const index = row * 3 + col;

                const qi   = this.qi(col);
                const iqq  = this.iqq(col);
                const octa = this.octaRoute(qi);
                const pipe = this.pipeTri(qi);

                // c+ Korrektor anwenden
                const qi_c   = qi   * this.cplus;
                const iqq_c  = iqq  * this.cplus;
                const octa_c = octa * this.cplus;
                const pipe_c = pipe * this.cplus;

                line.push({
                    qi: qi_c,
                    iqq: iqq_c,
                    octa: octa_c,
                    pipe3: pipe_c,
                    cplus: this.cplus
                });
            }

            this.grid.push(line);
        }

        return this.grid;
    }
}

window.SLICE_3x3 = new SLICE_3x3();

