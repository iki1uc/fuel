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

    // BALANCED DATA
    this.data = {
        innen,
        mech,
        nano,
        rein,
        pipe9,
        energy,
        xyx: {
            center: innen,
            mech,
            stable: innen === 81,
            orbit:  innen === 9,
            reset:  innen === 3,
            rar:    innen === 243
        }
    };

    return this.data;
};
