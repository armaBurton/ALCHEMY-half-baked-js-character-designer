export function makeStatsString(headCount, middleCount, bottomCount) {
    let head = headCount.toString();
    let middle = middleCount.toString();
    let bottom = bottomCount.toString();
    
    return head + middle + bottom;


    // let headCounter = document.createElement(`p`);
    // headCounter.innerHTML = `You have changed the head <span class="bolder">${headCount}</span> times.`;
    // report.concat(headCounter);

    // let middleCounter = document.createElement(`p`);
    // middleCounter.innerHTML = `You have changed the middle <span class="bolder">${middleCount}</span> times.`;
    // report.append(middleCounter);
    
    // let bottomCounter = document.createElement(`p`);
    // bottomCounter.innerHTML = `You have changed the bottom <span class="bolder">${bottomCount}</span> times.`;
    // report.append(bottomCounter);
    // return report;
}