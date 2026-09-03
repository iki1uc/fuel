// ram.raw.js
// Roh‑Ebene des RAM: 3E‑Modus (Energie, Echo, Effekt)
// Keine Verstärkung, keine Narrative, keine Pipeline‑Boosts

export const ramRAW = {
    buffer: [],     // reiner Speicher ohne Optimierung
    energy: 0,      // Grundkraft des Speichers
    echo: 0,        // Rückmeldung ohne GPU‑Hall
    effect: 0,      // unverstärkter Effekt

    // Setzt den RAM in den Rohzustand
    reset() {
        this.buffer = [];
        this.energy = 0;
        this.echo = 0;
        this.effect = 0;
        return this;
    },

    // Reiner Speicherzugriff ohne c+, Pump, Orbit
    write(value) {
        this.buffer.push(value);
        this.energy = this.buffer.length;
        this.echo = Math.floor(this.energy / 2);
        this.effect = Math.floor(this.energy / 4);
        return {
            raw: value,
            energy: this.energy,
            echo: this.echo,
            effect: this.effect
        };
    },

    read(index) {
        return this.buffer[index] ?? null;
    },

    // Fair‑Order‑Check (Schiedsrichter‑Modus)
    fair() {
        return this.energy >= 0 && this.echo >= 0 && this.effect
