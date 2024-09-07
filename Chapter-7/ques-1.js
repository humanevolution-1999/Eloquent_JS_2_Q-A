const roads = [
    "Alice's House-Bob's House", "Alice's House-Cabin",
    "Alice's House-Post Office", "Bob's House-Town Hall",
    "Daria's House-Ernie's House", "Daria's House-Town Hall",
    "Ernie's House-Grete's House", "Grete's House-Farm",
    "Grete's House-Shop", "Marketplace-Farm",
    "Marketplace-Post Office", "Marketplace-Shop",
    "Marketplace-Town Hall", "Shop-Town Hall"
    ];

//build a graph object out of it, the ask is to write a function that builds a graph object based on the above data
 
function buildGraph(edges){
    let graph = Object.create(null);
    function addNodes(from,to){
        if(from in graph)
            graph[from].push(to);    
        else
            graph[from]=[to];
        }
    for (let [from,to] of roads.map(r=>r.split('-'))){
        //console.log(from,to);
        addNodes(from,to);
        addNodes(to,from);
    }
    return graph; 
}

const roadGraph = buildGraph(roads);
console.log(Object.keys(roadGraph));

//represent the current state of the village by an object 
class VillageState{
    constructor(place,parcels){
        this.place=place;
        this.parcel=parcels;
    }

    move(destination){
        if(!(roadGraph[this.place].includes(destination)))
            return this;
        let parcels = this.parcel.map(p=>{
            if(p.place!=this.place)
                return p;
            return {place:destination, address:p.address};
        }).filter(p=>p.place!=p.address);
        return new VillageState(destination,parcels);
    }
}

//function to move the robot
function runRobot(state,robot,memory){
    for(let turns=0;;turns++){
        if(state.parcel.length==0)
        {
            console.log(`Parcel delivered in ${turns} turns!`);
            return turns;
        }

        let action = robot(state,memory);
        state = state.move(action.direction);
        memory = action.memory;
        console.log(`Robot moved to ${action.direction}!`);
    }
}

function randomPick(array){
    let choice = Math.floor(Math.random()*array.length);
    return array[choice];
}

function createRandomState(length=5){
    let currentPlace = randomPick(Object.keys(roadGraph));
    let currentParcel = [];
    for(let i=0;i<length;i++){
        let address=randomPick(Object.keys(roadGraph)),place;
        do{
            place = randomPick(Object.keys(roadGraph));
        }
        while(place==address)
        currentParcel.push({place,address});
    }
    return new VillageState(currentPlace,currentParcel);
}


//function to compare the robots efficiency
function compareRobot(robot1, robot2){
    let movesRobot1=0,movesRobot2=0;
    for(let i=0;i<100;i++){
        let state = createRandomState(Math.floor(Math.random()*10+1));
        movesRobot1 += runRobot(state,robot1,"");
        movesRobot2 += runRobot(state,robot2,"");
    }
    console.log(`average steps taken by robot1 -> ${movesRobot1/100}`);
    console.log(`average steps taken by robot2 -> ${movesRobot2/100}`);
    return movesRobot1<movesRobot2?"Robot1 wins":"Robot2 wins";
}


function randomRobot({place,parcel}){
    let choice = randomPick(roadGraph[place]);
    return {direction:choice};
}

const routeTrail = ["Alice's House", "Cabin", "Alice's House", "Bob's House",
"Town Hall", "Daria's House", "Ernie's House",
"Grete's House", "Shop", "Grete's House", "Farm",
"Marketplace", "Post Office"];

function mailRobot(state,memory){
    if(memory.length==0)
        memory=routeTrail;
    return {direction:memory[0],memory:memory.slice(1)};
}

function findRoute(graph,from,to){
    let work=[{at:from,route:[]}];
    for(let i=0;i<work.length;i++){
        let {at,route} = work[i];
        for(let place of graph[at]){
            if(place==to)
                return route.concat(place);
            if(!work.some(p=>p.at==place)){
                work.push({at:place, route:route.concat(place)});
            }
        }
    }
}

function pathTracingRobot(state,route){
    if(route.length==0){
        let currentParcel = state.parcel[0];
        if(state.place!=currentParcel.place){
            route = findRoute(roadGraph,state.place,currentParcel.place);
        }
        else{
            route = findRoute(roadGraph,currentParcel.place,currentParcel.address);
        }
    }
    //console.log(route);
    return {direction:route[0],memory:route.slice(1)};
}

console.log(compareRobot(mailRobot,pathTracingRobot));


