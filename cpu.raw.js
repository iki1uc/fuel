// cpu.raw.js
// Roh‑Ebene der CPU: 3E‑Modus (Energie, Echo, Effekt)
// Keine Verstärkung, keine Narrative, keine Pipeline‑Boosts

export const cpuRAW = {
    energy: 0,      // reine Grundkraft
    echo: 0,        // Rückmeldung ohne GPU‑Hall
    effect: 0,      // unverstärkter Effekt

    // Setzt die CPU in den Rohzustand
    reset() {
        this.energy = 0;
        this.echo = 0;
        this.effect = 0;
        return this;
    },

    // Reine Berechnung ohne c+, Pump, Orbit
    compute(value) {
        this.energy = value;
        this.echo = Math.floor(value / 3);
        this.effect = Math.floor(value / 9);
        return {
            raw: value,
            energy: this.energy,
            echo: this.echo,
            effect: this.effect
        };
    },

    // Fair‑Order‑Check (Schiedsrichter‑Modus)
    fair() {
        return (this.energy >= 0 && this.echo >= 0 && this.effect >= 0);
    }
};
