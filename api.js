export function applyCPlus(c, cplus){
    return {
        Phi:      c.Phi      * cplus,
        phi:      c.phi      * cplus,
        phi2:     c.phi2     * cplus,
        phiinfty: c.phiinfty * cplus
    };
}
