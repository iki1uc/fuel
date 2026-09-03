// rom.raw.js
// Roh-Ebene des ROM: 3R-Modus (Read, Recall, Root)
// Keine Verstärkung, keine Pipeline, keine GPU-Effekte

export const romRAW = {
    read: null,     // reiner Lesezugriff
    recall: null,   // unverfälschte Erinnerung
    root: null,     // Grundwert ohne Schwund

    // ROM in den Rohzustand setzen
    reset() {
        this.read = null;
        this.recall = null;
        this.root = null;
        return this;
    },

    // Reiner ROM-Zugriff ohne Energie, ohne Echo, ohne Drift
    access(value) {
        this.read = value;
        this.recall = value;
        this.root = value;
        return {
            read: this.read,
            recall: this.recall,
            root: this.root
        };
    },

    // Sicherheitscheck: ROM darf niemals Schwund haben
    safe() {
        return (
            this.read === this.recall &&
            this.recall === this.root &&
            this.root !== undefined
        );
    }
};
