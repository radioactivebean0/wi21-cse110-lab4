let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for (let o in statistics){
    if(o[0] == 'r' || statistics[o]%2 == 1){
        console.log(statistics[o])
    }
}