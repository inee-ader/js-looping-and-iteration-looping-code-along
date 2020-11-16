// Code your solutions in this file
function writeCards(array, event) {
    let thankYous = [];
    for (let i=0; i < array.length; i++) {
        thankYous.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
    }
    return thankYous;
}

function countDown(num) {
    while (num >= 0) {
        console.log(num);
        num--;
    }
}
