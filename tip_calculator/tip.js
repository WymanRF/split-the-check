const readlineSync = require('readline-sync')
const errMess = 'Not a valid number! Try again..'

const checkValue = Number(readlineSync.question('How much was the check?'))

if(isNaN(checkValue))
{
    console.log(errMess)
    // const checkValue = Number(readlineSync.question('How much was the check?'))
}
else
{
    const tipPercent = Number(readlineSync.question('What percentage do you want to tip?'))
    if(isNaN(tipPercent))
    {
        console.log(errMess)
    }
    else
    {
        const partyNum = Number(readlineSync.question('How many people are in your party?'))

        let tipAmount = (tipPercent/100) * checkValue
        let totalBill = tipAmount + checkValue
        let yourShare = totalBill/partyNum

        console.log('Your tip is $${tipAmount.toFixed(2)}')
        console.log('Your total bill is $${totalBill.toFixed(2)}')
        console.log('Your share is $${yourShare.toFixed(2)}')
    }
}
