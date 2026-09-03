// gpu.raw.js
// Roh‑Ebene der GPU: 3E‑Modus (Energie, Echo, Effekt)
// Keine Shader‑Verstärkung, keine Narrative, keine Pipeline‑Boosts

export const gpuRAW = {
    frame: 0,       // reine Frame‑Zählung
    energy: 0,      // Grundkraft der GPU
    echo: 0,        // Rückmeldung ohne Hall
    effect: 0,      // unverstärkter Effekt

    // Setzt die GPU in den Rohzustand
    reset() {
        this.frame = 0;
        this.energy = 0;
        this.echo = 0;
        this.effect = 0;
        return this;
    },

    // Reines Rendering ohne c+, Shader, Echo/Hall
    render() {
        this.frame++;
        this.energy = this.frame;
        this.echo = Math.floor(this.frame / 4);
        this.effect = Math.floor(this.frame / 12);
        return {
            frame: this.frame,
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
