// Pipeline9.js — Formel-Durchsetzung + Cache + GOLDENE SECHS
Pipeline9.cache = [];

Pipeline9.useA81 = function(axis){

    // GOLDENE SECHS
    const innen  = state.a81;          // Innen-Lehre
    const mech   = state.zahnrad;      // Mechanik
    const nano   = innen / 9;          // Ableitung 1
    const rein   = Math.sqrt(innen);   // Ableitung 2
    const pipe9  = axis.pipe9;         // Industrie-Achse

    // Energie aus axis.matrix
    let energy = 0;
    axis.matrix.forEach(row => {
        row.forEach(iqq => {
            MassHWTranswarp.set(iqq, iqq, TimeHW.delta);
            energy += MassHWTranswarp.compute();
        });
    });

    // FORMEL-DURCHSETZUNG (XYX-Balance)
    const formula =
        (innen * 0.25) +
        (mech  * 0.15) +
        (nano  * 0.20) +
        (rein  * 0.20) +
        (energy * 0.20);

    // CACHE — jede Silbe (jeder Impuls)
    Pipeline9.cache.push({
        time: Date.now(),
        innen,
        mech,
        nano,
        rein,
        pipe9,
        energy,
        formula
    });

    // Cache begrenzen
    if (Pipeline9.cache.length > 99) {
        Pipeline9.cache.shift();
    }

    // Rückgabe der BALANCED-Daten
    this.data = {
        innen,
        mech,
        nano,
        rein,
        pipe9,
        energy,
        formula,
        cache: Pipeline9.cache
    };

    return this.data;
};
