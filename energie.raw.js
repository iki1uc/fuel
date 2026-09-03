// energie.raw.js
// Ur‑Energie: die reine Kraft des Systems
// 3E‑Modus: Energie, Echo, Effekt
// Keine Verstärkung, keine Narrative, keine Pipeline, keine Hall‑Effekte

export const energieRAW = {
    value: 0,       // reine Energiequelle
    energy: 0,      // unverstärkte Kraft
    echo: 0,        // reine Rückmeldung
    effect: 0,      // reiner Effekt

    // Setzt die Energie in den Urzustand
    reset() {
        this.value = 0;
        this.energy = 0;
        this.echo = 0;
        this.effect = 0;
        return this;
    },

    // Energie laden: 1 Wert → 3E
    load(v) {
        this.value = v;
        this.energy = v;
        this.echo = Math.floor(v / 3);
        this.effect = Math.floor(v / 9);
        return {
            energie: this.value,
            energy: this.energy,
            echo: this.echo,
            effect: this.effect
        };
    },

    // Fair‑Order‑Check (Schiedsrichter‑Modus)
    fair() {
        return this.energy >= 0 && this.echo >= 0 && this.effect >= 0;
    }
};
