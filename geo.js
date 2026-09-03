export function geoAxes(Phi, phi, phi2, phiinfty, cplus = 1.0) {

    const cPhi      = Phi      * cplus;
    const cphi      = phi      * cplus;
    const cphi2     = phi2     * cplus;
    const cphiinfty = phiinfty * cplus;

    return {
        Phi: cPhi,
        phi: cphi,
        phi2: cphi2,
        phiinfty: cphiinfty,
        avg: (cPhi + cphi + cphi2 + cphiinfty) / 4,
        cplus
    };
}

export function geoLAGE(Phi, phi, phi2, phiinfty, cplus = 1.0) {

    const cPhi      = Phi      * cplus;
    const cphi      = phi      * cplus;
    const cphi2     = phi2     * cplus;
    const cphiinfty = phiinfty * cplus;

    return {
        x: cPhi * 9,
        y: cphi * 9,
        z: cphiinfty * 9,
        stabil: cphi2,
        cplus
    };
}
