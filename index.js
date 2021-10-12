// Code your solution in this file!
let block = 50
let block2 = 43

function distanceFromHqInBlocks(block) {
    return Math.abs(block - 42);
}


function distanceFromHqInFeet(block) {
   return distanceFromHqInBlocks(block)*264;
    
}

function distanceTravelledInFeet(block,block2) {
    return Math.abs(block-block2)*264
}

function calculatesFarePrice(start, destination) {
    let feet = distanceTravelledInFeet(start,destination)

    if (feet <= 400) {
        return 0
    } else if (feet <= 2000) {
        return (feet-400) * .02
    } else if (feet <= 2500) {
        return 25
    } else {
        return 'cannot travel that far'
    }
}