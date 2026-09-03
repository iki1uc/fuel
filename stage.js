class Stage {

    constructor(){
        this.stage = null;
    }

    // Ermittelt die Stage anhand der Größe
    detect(size){
        switch(size){
            case 3:   return 3;     // 3×1 oder 3×3
            case 9:   return 9;     // 3×3 Block
            case 81:  return 81;    // 9×9 Core
            case 243: return 243;   // Corridor Level 1
            case 729: return 729;   // Corridor Level 2
            default:
                throw new Error(`Unbekannte Stage-Größe: ${size}`);
        }
    }

    // Setzt die Stage
    set(size){
        this.stage = this.detect(size);
    }

    // Holt die Stage
    get(){
        return this.stage;
    }
}

window.Stage = new Stage();
