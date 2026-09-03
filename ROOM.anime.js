// ROOM.anime.js — Raum-Modul für ANIME/NO1.room

class ROOManime {

    constructor(){

        // Header
        this.NAME = "ANIME";
        this.CORE = "NO1.room";
        this.FRAME = 81;
        this.SUBFRAME = 9;
        this.STATE = "OPEN";

        // Matrix
        this.size = 9;
        this.matrix = this.buildMatrix();

        // Leitmitte d e i n o r s u v
        this.axis = ["d","e","i","n","o","r","s","u","v"];

        // Core-Modul
        this.core = window.NO1Room ?? null;
    }

    // 9×9 Matrix erzeugen
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

    // Raumzustand abrufen
    get(){
        return {
            NAME: this.NAME,
            CORE: this.CORE,
            FRAME: this.FRAME,
            SUBFRAME: this.SUBFRAME,
            STATE: this.STATE,
            axis: this.currentAxis ?? null,
            matrix: this.matrix,
            core: this.core?.getRoom() ?? null
        };
    }
}

window.ROOManime = new ROOManime();
