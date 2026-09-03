// atom.raw.js
// Ur‑Ebene: die kleinste Einheit des Systems
// 3E‑Modus: Energie, Echo, Effekt
// Keine Verstärkung, keine Narrative, keine Pipeline, keine Hall‑Effekte

export const atomRAW = {
    value: 0,       // atomare Grundgröße
    energy: 0,      // reine Energie
    echo: 0,        // reine Rückmeldung
    effect: 0,      // reiner Effekt

    // Setzt das Atom in den Urzustand
    reset() {
        this.value = 0;
        this.energy = 0;
        this.echo = 0;
        this.effect = 0;
        return this;
    },

    // Atomare Berechnung: 1 Wert → 3E
    charge(v) {
        this.value = v;
        this.energy = v;
        this.echo = Math.floor(v / 2);
        this.effect = Math.floor(v / 4);
        return {
            atom: this.value,
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
