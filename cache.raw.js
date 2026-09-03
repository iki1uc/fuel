// cache.raw.js — RAW + Whitelist für d e i n o r s u v

export const cacheRAW = {
    store: [],
    energy: 0,
    echo: 0,
    effect: 0,

    // Nur diese Zeichen sind erlaubt
    whitelist: ["d","e","i","n","o","r","s","u","v"],

    reset() {
        this.store = [];
        this.energy = 0;
        this.echo = 0;
        this.effect = 0;
        return this;
    },

    push(value) {

        // Nur erlaubte Zeichen
        if (!this.whitelist.includes(value)) {
            return {
                raw: null,
                error: "VALUE_NOT_ALLOWED",
                allowed: this.whitelist
            };
        }

        this.store.push(value);

        this.energy = this.store.length;
        this.echo = Math.floor(this.energy / 3);
        this.effect = Math.floor(this.energy / 9);

        return {
            raw: value,
            energy: this.energy,
            echo: this.echo,
            effect: this.effect
        };
    },

    read(index) {
        return this.store[index] ?? null;
    },

    fair() {
        return this.energy >= 0 && this.echo >= 0 && this.effect >= 0;
    }
};
