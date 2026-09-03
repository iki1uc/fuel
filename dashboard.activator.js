// dashboard.activator.js
// Aktivator-Ebene des Dashboards: Start, Flow, Meta, Zündung

export function activateDashboard(r100, r360) {

    // Rohdaten vorbereiten
    const respo100 = r100.slice(0, 10);
    const respo360 = r360.slice(0, 12);

    // Aktivator-Meta (GOLDENE SECHS light)
    const meta = {
        frame: Date.now(),
        size100: respo100.length,
        size360: respo360.length,
        flow: "DUAL-FLOW",
        trigger: true,
        safe: respo100.length > 0 && respo360.length > 0
    };

    // Aktivator-Paket
    return {
        status: "RESPO-AKTIVATOR",
        mode: "DUAL",
        trigger: "ON",
        respo100,
        respo360,
        meta
    };
}
