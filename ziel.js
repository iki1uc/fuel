// ziel.js — GOLDENE SECHS · XYX-Zentrum · echtes Ziel
Gleichung.setStage(A81_AXIS.matrix[r][c]);

// GOLDENE SECHS
const innen  = state.a81;
const mech   = state.zahnrad;
const nano   = innen / 9;
const rein   = Math.sqrt(innen);
const pipe12 = A81_AXIS.pipe12;
const pipe9  = A81_AXIS.pipe9;

// Energie aus der Matrix
let energy = 0;
A81_AXIS.matrix.forEach(row => {
    row.forEach(iqq => {
        MassHWTranswarp.set(iqq, iqq, TimeHW.delta);
        energy += MassHWTranswarp.compute();
    });
});

// XYX-Zentrum
const xyx = {
    innen,
    mech,
    nano,
    rein,
    energy,
    pipe9,
    pipe12
};

// Gleichung ausführen
const result = Gleichung.run(xyx);

// Ziel speichern
Ziel.value = {
    stage: A81_AXIS.matrix[r][c],
    xyx,
    result
};
