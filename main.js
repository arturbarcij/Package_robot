// Roads and coords objects are expected to be loaded
const ctx = document.querySelector("#town").getContext("2d");

const connections = build_connections();

drawRoads();
drawLocations();

let packages = [
                    { current: "A", destination: "B" },
                    { current: "B", destination: "C" },
                    { current: "C", destination: "G" },
                    { current: "D", destination: "E" },
                    { current: "E", destination: "F" },
                    { current: "F", destination: "Z" },
                    { current: "G", destination: "P" },
                    { current: "H", destination: "G" },];
                
                
// 3 pakker der alle er i punktet A og skal leveres til hhv. B, C og G
let Town = Object.create(state)
//laver et nyt objekt ud fra objekt status fra town.js
Town.init("A", packages)
//definerer start punkt
Town = Town.move("B")
//flytter punktet til B

/* let test = Object.create(state);
test.init("A", [{ current: "A", destination: "B" }, {
    current: "A",
    destination: "C"
}]);

let travel = ["B","A","C","P"];
for (let to of travel) {
    test = test.move(to);
    console.log(test);
}
 */

Loop()

console.log(Town)

function randomPick(coords) {
    let valg = Math.Floor(Math.random() * coords.lenght)
    return state[valg];
}
    
function randomRobot(state) {
    return {direction: randomPick(drawRoads[state.place])}
}