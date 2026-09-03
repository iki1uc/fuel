// cache.raw.js
// Roh‑Ebene des CACHE: 3E‑Modus (Energie, Echo, Effekt)
// Keine Prefetch‑Boosts, keine Pipeline‑Optimierung, keine Narrative

export const cacheRAW = {
    store: [],      // reiner Cache ohne Optimierung
    energy: 0,      // Grundkraft des Cache
    echo: 0,        // Rückmeldung ohne Hall
    effect: 0,      // unverstärkter Effekt

    // Setzt den Cache in den Rohzustand
    reset() {
        this.store = [];
        this.energy = 0;
        this.echo = 0;
        this.effect = 0;
        return this;
    },

    // Reiner Cache‑Zugriff ohne c+, Prefetch, Orbit
    push(value) {
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

    // Fair‑Order‑Check (Schiedsrichter‑Modus)
    fair() {
        return this.energy >= 0 && this.echo >= 0 && this.effect >= 0;
    }
};
