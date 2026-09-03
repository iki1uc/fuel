// hall.rad.js
// Roh‑Hall für Orbit/Kreis (Rad)
// 3E‑Modus: Energie, Echo, Effekt

export const hallRadRAW = {
    rad: 0,         // Orbit-Position
    energy: 0,      // Grundkraft
    hall: 0,        // reine Resonanz
    effect: 0,      // unverstärkter Effekt

    reset() {
        this.rad = 0;
        this.energy = 0;
        this.hall = 0;
        this.effect = 0;
        return this;
    },

    orbit() {
        this.rad++;
        this.energy = this.rad;
        this.hall = Math.floor(this.rad / 3);
        this.effect = Math.floor(this.rad / 9);
        return {
            rad: this.rad,
            energy: this.energy,
            hall: this.hall,
            effect: this.effect
        };
    },

    fair() {
        return this.energy >= 0 && this.hall >= 0 && this.effect >= 0;
    }
};
