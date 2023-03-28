// Build connection object, each key (location) should contain an array of all connected locations
 function build_connections() {
    //definerer et aray og kalder den noglering
    noglering = [];

    //for loop, hvor let betyder lokal variabel i denne objekt og in er operator som returner specifik værdi som skal være true, ellers false
    // så hvis n er ikke i coords, så in returner false, fx "A" i coords, vil return true, altså den første objekt
    for (let n in coords) {
        //definerer n i array af noglering som et array
        noglering[n] = [];

        for (let k in roads) 
        {
            //if statement, hvis loop første værdi i roads er lig med n, skal anden værdi skubbes ind vha push methoden
            //push metoden tilføjer nye værdier til et array og returner nye længde(med ny værdier)
            if(roads[k][0] == n ){
                noglering[n].push(roads[k][1] )
            }
            //modsatte statement
            if(roads[k][1] == n ){
                noglering[n].push(roads[k][0] )
            }
            
        }



    } 

    //return sender alle data tilbage til noglering
    return noglering;

};




// State object template for the town
const state = {
    init(robot_loc, packages) {
        this.robot_loc = robot_loc;
        this.packages = packages;
    },

    move(to) { 
        let NextStatus=Object.create(state)
        NextStatus.init(to,packages)
        drawrobot(to)
        return NextStatus
    }
};

function MovePackages(Town, to) {
    for (let k in Town.packages)
        if (Town.packages[k]["current"] == Town.robot_loc)
            Town.packages[k]["current"] = to

}
function MoveRandom() {
    let destinations = connections[Town.robot_loc]
    let choice = Math.floor(Math.random() * destinations.length)
    return destinations[choice]

}
function Loop() {
    ctx.clearRect(0, 0, 1200, 700);
    drawLocations();
    drawRoads();
    let destination = MoveRandom()
    Town = Town.move(destination)   
    //console.log(Town)
    IsCurrentDestianation(Town)
    drawpackages(Town)
    
    setTimeout(Loop, 1000)
}
function IsCurrentDestianation (Town){
    for (let k in Town.packages)
    if (Town.packages[k]["current"]==Town.packages[k]["destination"])
    Town.packages[k]["destination"]= Town.packages[k].destination+" afleveret"
}

    
