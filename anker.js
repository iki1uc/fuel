// flanke.js — Schachzüge + Einzel-Leitmitte d e i n o r s u v

class Flanke {

    constructor(){
        this.mode = "ICE";
        this.stage = null;
        this.target = null;
        this.cplus = 1.0;

        // Zeichen-Leitmitte
        this.whitelist = ["d","e","i","n","o","r","s","u","v"];

        // Schachzüge (symbolisch)
        this.moves = [
            "K", "Q", "R", "B", "N", "P",   // Figuren
            "O-O", "O-O-O",                // Rochaden
            "x", "+", "#",                 // Aktionen
            "a","b","c","d","e","f","g","h" // Linien
        ];
    }

    // c+ setzen
    setCPlus(value){
        this.cplus = value;
        return this.cplus;
    }

    // Modus setzen
    setMode(mode){
        if(mode !== "ICE" && mode !== "FEUER"){
            throw new Error(`Ungültiger Modus: ${mode}`);
        }
        this.mode = mode;
    }

    // Schachzug → Zeichen (Whitelist)
    mapMoveToChar(move){
        const index = this.moves.indexOf(move);
        if(index === -1){
            return {
                ok: false,
                error: "MOVE_NOT_ALLOWED",
                move,
                allowed: this.moves
            };
        }

        // Zeichen aus Whitelist
        const char = this.whitelist[index % this.whitelist.length];
        return { ok: true, move, char };
    }

    // Stage setzen über Schachzug
    setStageFromMove(move){
        const m = this.mapMoveToChar(move);
        if(!m.ok) return m;

        this.stage = m.char.charCodeAt(0) * this.cplus;

        return {
            ok: true,
            move,
            char: m.char,
            stage: this.stage
        };
    }

    // Übergabe vorbereiten über Schachzug
    prepareFromMove(move){
        const m = this.mapMoveToChar(move);
        if(!m.ok) return m;

        this.target = m.char.charCodeAt(0) * this.cplus;

        return {
            ok: true,
            mode: this.mode,
            from: this.stage,
            to: this.target,
            move,
            char: m.char,
            cplus: this.cplus
        };
    }
}

window.Flanke = new Flanke();
