// applyCPlus.js — Einzel-Leitimität für d e i n o r s u v

export function applyCPlus(c, cplus){

    // Nur diese Zeichen sind erlaubt
    const whitelist = ["d","e","i","n","o","r","s","u","v"];

    // Prüfen, ob alle Werte erlaubt sind
    const keys = ["Phi","phi","phi2","phiinfty"];
    for(const k of keys){
        if(typeof c[k] === "string" && !whitelist.includes(c[k])){
            return {
                ok: false,
                error: "VALUE_NOT_ALLOWED",
                key: k,
                value: c[k],
                allowed: whitelist
            };
        }
    }

    // Transformation
    return {
        ok: true,
        Phi:      c.Phi      * cplus,
        phi:      c.phi      * cplus,
        phi2:     c.phi2     * cplus,
        phiinfty: c.phiinfty * cplus
    };
}
