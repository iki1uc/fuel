export function buildDashboard(r100, r360){
    return {
        respo100: r100.slice(0, 10),   // Vorschau
        respo360: r360.slice(0, 12),   // Vorschau
        status: "RESPO-AKTIV",
        mode: "DUAL"
    };
}
