Verfahren.useA81 = function(axis){
    this.stage = axis.matrix[0][0] * A81_AXIS.cplus;
    return this.run();
};
