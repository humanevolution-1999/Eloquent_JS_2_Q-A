function findRoute(graph,from,to){
    let work=[{at:from,route:[]}];
    for(let i=0;i<work.length;i++){
        let {at,route} = work[i];
        for(let place of graph(at)){
            if(place==to)
                return route.concat(place);
            if(!work.some(p=>p.at==place)){
                work.push({at:place, route:route.concat(place)});
            }
        }
    }
}

function pathTracingRobot(state,memory){
    if(memory.length==0){
        let currentParcel = state.parcel[0];
        if(state.place!=currentParcel.place){
            route = findRoute(roadGraph,state.place,currentParcel.place);
        }
        else{
            route = findRoute(roadGraph,currentParcel.place,currentParcel.address);
        }
    }
    return {direction:route[0],memory:route.slice(1)};
}