// cache.safe.js
// Station-Safe Cache: No-Loss, GOLDENE SECHS, XYX-Zentrum

export const cacheSAFE = {
    store: [],
    energy: 0,
    echo: 0,
    effect: 0,

    meta: {
        innen: 0,
        mech: 0,
        nano: 0,
        rein: 0,
        energyHW: 0,
        industry: null
    },

    safe: true,

    reset() {
        this.store = [];
        this.energy = 0;
        this.echo = 0;
        this.effect = 0;
        this.safe = true;
        return this;
    },

    updateMeta() {
        this.meta.innen  = state.a81;
        this.meta.mech   = state.zahnrad;
        this.meta.nano   = state.a81 / 9;
        this.meta.rein   = Math.sqrt(state.a81);
        this.meta.energyHW = TimeHW.delta;
        this.meta.industry = {
            pipe3: A81_AXIS.pipe3,
            pipe6: A81_AXIS.pipe6,
            pipe9: A81_AXIS.pipe9,
            pipe12: A81_AXIS.pipe12
        };

        this.safe =
            this.energy >= 0 &&
            this.echo >= 0 &&
            this.effect >= 0 &&
            this.meta.innen > 0;
    },

    push(value) {
        this.store.push(value);

        this.energy = this.store.length;
        this.echo = Math.floor(this.energy / 3);
        this.effect = Math.floor(this.energy / 9);

        this.updateMeta();

        return {
            raw: value,
            energy: this.energy,
            echo: this.echo,
            effect: this.effect,
            meta: this.meta,
            safe: this.safe
        };
    },

    read(index) {
        return this.store[index] ?? null;
    }
};
