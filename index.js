
function wrapCards(names, event) {
    const cardList = []
    for (let i = 0; i < names.length; i++) {
        cardList.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return cardList;
}

wrapCards(["Reece", "Jay", "Penny"], "birthday");


function countDown(x) {
    let start = x;
    while(start >= 0) {
        console.log(start--);
    }
}
countDown(10)