// atom.raw.js — Ur-Atom + Narrativ-Ebene
// RAW bleibt unverändert, Narrativ erklärt das Verhalten

export const atomRAW = {
    value: 0,       // atomare Grundgröße (Kernladung)
    energy: 0,      // reine Energie (Elektronenbewegung)
    echo: 0,        // Resonanz (Rückmeldung)
    effect: 0,      // Wirkung (Interaktion)

    // Narrativ-Ebene (Erde-Modell)
    narrative: {
        core: "neutral",       // Kernzustand
        shell: "stable",       // Elektronenhülle
        state: "ground",       // Energiezustand
        element: "none"        // symbolische Zuordnung
    },

    reset() {
        this.value = 0;
        this.energy = 0;
        this.echo = 0;
        this.effect = 0;

        this.narrative.core = "neutral";
        this.narrative.shell = "stable";
        this.narrative.state = "ground";
        this.narrative.element = "none";

        return this;
    },

    // Atomare Berechnung: 1 Wert → 3E + Narrativ
    charge(v) {
        this.value = v;
        this.energy = v;
        this.echo = Math.floor(v / 2);
        this.effect = Math.floor(v / 4);

        // Narrativ: Erde-Modell
        this.narrative.core = v > 0 ? "charged" : "neutral";
        this.narrative.shell = v > 2 ? "excited" : "stable";
        this.narrative.state = v > 5 ? "high" : "ground";
        this.narrative.element = this.mapElement(v);

        return {
            atom: this.value,
            energy: this.energy,
            echo: this.echo,
            effect: this.effect,
            narrative: this.narrative
        };
    },

    // Symbolische Element-Zuordnung (Narrativ)
    mapElement(v){
        const elements = ["H","He","Li","Be","B","C","N","O","F","Ne"];
        return elements[v] ?? "none";
    },

    fair() {
        return this.energy >= 0 && this.echo >= 0 && this.effect >= 0;
    }
};
