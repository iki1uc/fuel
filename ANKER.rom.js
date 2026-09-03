// ANKER.rom.js — ROM-Anker für A81/TMP/SCAN/ANIME

class ANKERrom {

    constructor(){

        // ROM-Header
        this.CORE = "81.rom";
        this.STATE = "active";

        // GOLDENE SECHS
        this.data = {
            innen: 0,
            mech: 0,
            nano: 0,
            rein: 0,
            pipe9: 0,
            energy: 0
        };

        // Leitmitte d e i n o r s u v
        this.axis = ["d","e","i","n","o","r","s","u","v"];
    }

    // Achse setzen
    setAxis(char){
        if(!this.axis.includes(char)){
            return {
                ok: false,
                error: "AXIS_NOT_ALLOWED",
                char,
                allowed: this.axis
            };
        }
        this.currentAxis = char;
        return { ok: true, axis: char };
    }

    // ROM-Daten aus A81_AXIS übernehmen
    load(A81){

        this.data.innen  = A81.matrix.flat().reduce((a,b)=>a+b,0);
        this.data.mech   = A81.pipe6.flat().reduce((a,b)=>a+b,0);
        this.data.nano   = A81.pipe3.flat().reduce((a,b)=>a+b,0);
        this.data.rein   = A81.octa.flat().reduce((a,b)=>a+b,0);
        this.data.pipe9  = A81.pipe9.flat().reduce((a,b)=>a+b,0);
        this.data.energy = A81.pipe12.flat().reduce((a,b)=>a+b,0);

        return {
            CORE: this.CORE,
            STATE: this.STATE,
            axis: this.currentAxis ?? null,
            data: this.data
        };
    }
}

window.ANKERrom = new ANKERrom();
