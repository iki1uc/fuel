// ================================================================
// 1. Energetische Impulse aus axis.matrix (qi / iqq)
// ================================================================
axis.matrix.forEach(row => {
    row.forEach(iqq => {
        MassHWTranswarp.set(
            iqq,          // qi = Masse
            iqq,          // iqq = Geschwindigkeit
            TimeHW.delta  // Δt
        );
        MassHWTranswarp.compute();
    });
});

// ================================================================
// 2. Mechanischer Impuls (Zahnrad) – separat, BALANCED
// ================================================================
Pipeline9.useA81({
    pipe9: axis.pipe9,
    a81: this.a81,
    nano: this.nano(),
    rein: this.rein(),
    impuls: this.impuls(),
    zahnrad: this.zahnrad   // ← HIER MUSS ER REIN
});
