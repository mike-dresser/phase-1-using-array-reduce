const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

let totalBatteries = batteryBatches.reduce((a, e) => {
    return a + e;
})

const dice = [1,3,5,2,6,2];

let tally = dice.reduce((a, e) => {
    
    if (e in a) {
        a[e]++;
    } else {
        a[e] = 1;
    }
    return a;
}, {})