// ANKER.tmp.js — TMP-Anker für Anime-Frames

class TMPAnker {

    constructor(){
        this.MODE = "anime";
        this.FRAME = 81;
        this.SUBFRAME = 9;
        this.VIDEO = true;
        this.SCAN = true;
        this.STATE = "active";

        // 9x9 Matrix
        this.size = 9;
        this.matrix = this.buildMatrix();

        // Leitmitte d e i n o r s u v
        this.axis = ["d","e","i","n","o","r","s","u","v"];
    }

    buildMatrix(){
        const m = [];
        for(let y = 0; y < this.size; y++){
            const row = [];
            for(let x = 0; x < this.size; x++){
                row.push(0);
            }
            m.push(row);
        }
        return m;
    }

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

    get(){
        return {
            MODE: this.MODE,
            FRAME: this.FRAME,
            SUBFRAME: this.SUBFRAME,
            VIDEO: this.VIDEO,
            SCAN: this.SCAN,
            STATE: this.STATE,
            matrix: this.matrix,
            axis: this.currentAxis ?? null
        };
    }
}

window.TMPAnker = new TMPAnker();
