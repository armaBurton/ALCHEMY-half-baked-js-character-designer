export function makeStatsString(headCount, middleCount, bottomCount) {
    let head = headCount.toString();
    let middle = middleCount.toString();
    let bottom = bottomCount.toString();
    
    return head + middle + bottom;
}