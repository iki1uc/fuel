// NO1.room.js — Raum-Modul für ANIME/NO1.room
// Leitmitte: d e i n o r s u v

class NO1Room {

    constructor(){

        // Raumparameter
        this.value = 0;
        this.pulse = 0;
        this.drift = 0;
        this.angle = 0;

        this.range = "0°–360°";
        this.state = "raw";
        this.mode  = "anchor";

        // Orte
        this.TMP  = "/iki1uc/TMP/";
        this.HDF  = "/iki1uc/HDF/";
        this.ROOM = "/iki1uc/ANIME/NO1.room";

        // Lage
        this.LAGE = "ANIME";

        // Vector-ID
        this.vectorID = "anime-01";

        // Matrix
        this.size = 9;
        this.slots = 81;
        this.matrix = this.buildMatrix();

        // Leitmitte
        this.whitelist = ["d","e","i","n","o","r","s","u","v"];
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

    // Leitmitte prüfen
    allow(char){
        return this.whitelist.includes(char);
    }

    // Raumachsen setzen (Breite/Höhe/Tiefe)
    setAxis(char){
        if(!this.allow(char)){
            return {
                ok: false,
                error: "CHAR_NOT_ALLOWED",
                char,
                allowed: this.whitelist
            };
        }

        this.axis = char;
        return {
            ok: true,
            axis: char
        };
    }

    // Raumparameter setzen
    setParams({value, pulse, drift, angle}){
        this.value = value;
        this.pulse = pulse;
        this.drift = drift;
        this.angle = angle;

        return {
            value: this.value,
            pulse: this.pulse,
            drift: this.drift,
            angle: this.angle
        };
    }

    // Raumzustand abrufen
    getRoom(){
        return {
            ROOM: this.ROOM,
            LAGE: this.LAGE,
            state: this.state,
            mode: this.mode,
            vectorID: this.vectorID,
            matrix: this.matrix,
            slots: this.slots,
            params: {
                value: this.value,
                pulse: this.pulse,
                drift: this.drift,
                angle: this.angle
            },
            axis: this.axis ?? null
        };
    }
}

window.NO1Room = new NO1Room();
