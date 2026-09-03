class A81_AXIS {

    constructor() {
        this.size = 9;

        this.matrix = [];
        this.pipe3  = [];
        this.pipe6  = [];
        this.pipe9  = [];
        this.pipe12 = [];
        this.octa   = [];

        this.cplus = 1.0;   // c+ = Korrektor
    }

    // c+ setzen
    setCPlus(value){
        this.cplus = value;
        return this.cplus;
    }

    // --- VALIDATION ---
    validateIndex(r, c) {
        if (r < 0 || c < 0 || r >= this.size || c >= this.size) {
            throw new Error(`Index out of range: r=${r}, c=${c}`);
        }
    }

    // --- QI – reine Index-Schaltung ---
    qi(r, c) {
        this.validateIndex(r, c);
        return r * this.size + c;
    }

    // --- IQQ – 3-Zustands-Schaltung ---
    iqq(r, c) {
        return this.qi(r, c) % 3;
    }

    // --- OCTA – 8-Wege-Intelligenz ---
    octaRoute(qi) {
        return qi % 8;
    }

    // --- PIPELINES ---
    pipeTri(qi)  { return qi % 3; }
    pipeHex(qi)  { return qi % 6; }
    pipeNon(qi)  { return qi % 9; }
    pipeDode(qi) { return qi % 12; }

    // --- MASTER-MATRIX ---
    build() {
        this.matrix = [];
        this.pipe3  = [];
        this.pipe6  = [];
        this.pipe9  = [];
        this.pipe12 = [];
        this.octa   = [];

        for (let r = 0; r < this.size; r++) {
            let row = [], p3 = [], p6 = [], p9 = [], p12 = [], oc = [];

            for (let c = 0; c < this.size; c++) {
                const qi  = this.qi(r, c);
                const iqq = this.iqq(r, c);

                // c+ Korrektor anwenden
                const qi_c   = qi   * this.cplus;
                const iqq_c  = iqq  * this.cplus;
                const octa_c = this.octaRoute(qi) * this.cplus;
                const p3_c   = this.pipeTri(qi)   * this.cplus;
                const p6_c   = this.pipeHex(qi)   * this.cplus;
                const p9_c   = this.pipeNon(qi)   * this.cplus;
                const p12_c  = this.pipeDode(qi)  * this.cplus;

                row.push(iqq_c);
                p3.push(p3_c);
                p6.push(p6_c);
                p9.push(p9_c);
                p12.push(p12_c);
                oc.push(octa_c);
            }

            this.matrix.push(row);
            this.pipe3.push(p3);
            this.pipe6.push(p6);
            this.pipe9.push(p9);
            this.pipe12.push(p12);
            this.octa.push(oc);
        }

        return {
            matrix: this.matrix,
            pipe3: this.pipe3,
            pipe6: this.pipe6,
            pipe9: this.pipe9,
            pipe12: this.pipe12,
            octa: this.octa,
            cplus: this.cplus
        };
    }
}

window.A81_AXIS = new A81_AXIS();
