export function buildRespo360(){
    const circle = [];
    for(let i=0;i<360;i++){
        circle.push({
            degree: i,
            axis: (i % 12),
            type: "CIRCLE",
            level: "360°"
        });
    }
    return circle;
}
