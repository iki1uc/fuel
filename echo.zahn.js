// echo.zahn.js
// Roh‑Echo für Zyklen/Knoten (Zahn)
// 3E‑Modus: Energie, Echo, Effekt

export const echoZahnRAW = {
    zahn: 0,        // aktueller Zyklus-Schritt
    energy: 0,      // Grundkraft
    echo: 0,        // reine Rückmeldung
    effect: 0,      // unverstärkter Effekt

    reset() {
        this.zahn = 0;
        this.energy = 0;
        this.echo = 0;
        this.effect = 0;
        return this;
    },

    step() {
        this.zahn++;
        this.energy = this.zahn;
        this.echo = Math.floor(this.zahn / 2);
        this.effect = Math.floor(this.zahn / 6);
        return {
            zahn: this.zahn,
            energy: this.energy,
            echo: this.echo,
            effect: this.effect
        };
    },

    fair() {
        return this.energy >= 0 && this.echo >= 0 && this.effect >= 0;
    }
};
