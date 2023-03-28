// Paint a small filled circle on the canvas for each key (location) in coords 
function drawLocations() {
    for (let k in coords) {
        ctx.beginPath();
        let x = coords[k].x;
        let y = coords[k].y;
        ctx.arc(x, y, 10, 0, 6.3);
        ctx.fillStyle = "black";
        ctx.fill();

        // Skriver navnet over cirklen
        ctx.font = "20px Comic Sans MS";
        ctx.fillStyle = "blue";
        ctx.textAlign = "center";
        ctx.fillText(k, coords[k].x, coords[k].y - 20);
    }

}

function drawrobot(location) {
    ctx.beginPath();
    let x = coords[location].x;
    let y = coords[location].y;
    ctx.arc(x, y, 10, 0, 6.3);
    ctx.fillStyle = "red";
    ctx.fill();
}

function drawpackages(Town) {
    for (let n in Town.packages) {
        ctx.font = "15px Comic Sans MS";
        ctx.fillStyle = "blue";
        ctx.textAlign = "center";

        ctx.fillText(Town.packages[n]["destination"],
            coords[Town.packages[n]["current"]].x,
            coords[Town.packages[n]["current"]].y +10 + 12*n)
            //Math.floor(Math.random() * Town.packages.length))
    }
}



//laver en vej ved at tage start kordinater til den første  i roads og slutkordinater til den anden.
function drawRoads() {
    for (let n in roads) {

        ctx.beginPath();
        ctx.moveTo(coords[(roads[n][0])].x, coords[(roads[n][0])].y);
        ctx.lineTo(coords[(roads[n][1])].x, coords[(roads[n][1])].y);
        ctx.stroke();
    }
}