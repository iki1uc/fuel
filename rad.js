pipeline(axis) {
  Pipeline9.useA81({
    pipe9: axis.pipe9,
    a81: this.a81,
    nano: this.nano(),
    rein: this.rein(),
    impuls: this.impuls(),
    zahnrad: this.zahnrad   // ← GENAU HIER REIN
  });
}
