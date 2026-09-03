// --- OCTA-Symbole ---
OCTA_SYMBOLS = ["◎","◉","◆","△","▣","↺","◉","◎"];

// --- MCFLY-Potenzen ---
POTENZEN = [3, 9, 27, 81, 243, 729];

// Symbol aus octaRoute
symbol(qi){
    return this.OCTA_SYMBOLS[this.octaRoute(qi)];
}

// Potenz aus qi
power(qi){
    return this.POTENZEN[qi % this.POTENZEN.length];
}

// Achsen-Wege (↗ ↘)
axisWay(qi){
    return qi % 2 === 0 ? "↗" : "↘";
}
