cache.all = {
    matrix: axis.matrix.map(row => row.map(v => v * A81_AXIS.cplus)),
    pipe3: axis.pipe3.map(row => row.map(v => v * A81_AXIS.cplus)),
    pipe6: axis.pipe6.map(row => row.map(v => v * A81_AXIS.cplus)),
    pipe9: axis.pipe9.map(row => row.map(v => v * A81_AXIS.cplus)),
    pipe12: axis.pipe12.map(row => row.map(v => v * A81_AXIS.cplus)),
    octa: axis.octa.map(row => row.map(v => v * A81_AXIS.cplus)),
    stageChain: Build.chain.map(v => v * Build.cplus),
    impulse: MassHW.impuls,
    energie: MassHW.energie,
    kraft: MassHW.kraft,
    gradient: MassHW.gradient,
    flanke: Flanke.stage,
    arbeit: Arbeit.stage
};
