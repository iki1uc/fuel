const axis = A81_AXIS.build();

// ================================================================
// GPU-Core: BALANCED, ALL NATURA, XYX-Zentrum
// ================================================================
gpu.core = {

    // 1. Pipes (Industrie-Kanäle)
    pipe3:  axis.pipe3,
    pipe6:  axis.pipe6,
    pipe9:  axis.pipe9,
    pipe12: axis.pipe12,

    // 2. Innen-Lehre (A81)
    innen: state.a81,

    // 3. Ableitungen
    nano: state.a81 / 9,
    rein: Math.sqrt(state.a81),

    // 4. Mechanischer Impuls (Zahnrad)
    zahnrad: state.zahnrad,

    // 5. Energetische Impulse aus axis.matrix
    energy: axis.matrix.map(row =>
        row.map(iqq => ({
            qi: iqq,
            iqq: iqq,
            delta: TimeHW.delta
        }))
    ),

    // 6. XYX-Balance (Zentrum)
    xyx: {
        innen: state.a81,
        mechanik: state.zahnrad,
        energie: TimeHW.delta,
        stabil: (state.a81 === 81),
        orbit:  (state.a81 === 9),
        reset:  (state.a81 === 3),
        rar:    (state.a81 === 243)
    }
};
