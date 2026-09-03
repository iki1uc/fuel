// TMP.cubik.js — Cubik-Wandlung für TMP/HDF
// Leitmitte: d e i n o r s u v

class TMPcubik {

    constructor(){

        // Orte
        this.HOME  = "/iki1uc/TMP/";
        this.ORT   = "/iki1uc/HDF/";
        this.USE   = "/iki1uc/HDF/";
        this.USER  = "/iki1uc/TMP/";

        // Räume
        this.ROOM   = "NO1.room";
        this.UROOM  = "raw";
        this.ROOMC  = "anchor";

        // Zustand
        this.STATE = "tmp-active";
        this.MODE  = "tmp-anchor";

        // Matrix
        this.size = 9;
        this.slots = 81;
        this.vectorSlot = "anime-01";

        // Argumente
        this.ARG    = "value";
        this.XARG   = "pulse";
        this.ARG3TE = "drift";
        this.ANGLE  = "0°–360°";

        // Leitmitte
        this.whitelist = ["d","e","i","n","o","r","s","u","v"];

        // Matrix
        this.matrix = this.buildMatrix();
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

    // Slot setzen (anime-01)
    setSlot(char){
        if(!this.allow(char)){
            return {
                ok: false,
                error: "CHAR_NOT_ALLOWED",
                char,
                allowed: this.whitelist
            };
        }

        this.vectorSlot = char;
        return {
            ok: true,
            slot: this.vectorSlot
        };
    }

    // Cubik-Wandlung ausführen
    transform(arg, xarg, drift){
        return {
            HOME: this.HOME,
            ORT: this.ORT,
            ROOM: this.ROOM,
            STATE: this.STATE,
            MODE: this.MODE,
            matrix: this.matrix,
            slot: this.vectorSlot,
            ARG: arg,
            XARG: xarg,
            ARG3TE: drift,
            angle: this.ANGLE
        };
    }
}

window.TMPcubik = new TMPcubik();
