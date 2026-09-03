const axis = A81_AXIS.build();

axis.matrix.forEach(row => {
    row.forEach(iqq => {
        MassHWTranswarp.set(iqq, iqq, TimeHW.delta);
        MassHWTranswarp.compute();
    });
});
