const costPrice = document.querySelector("#stock-price-bought");
const numberOfShares = document.querySelector("#number-of-shares");
const sellingPrice = document.querySelector("#stock-price-current")
const submitButton = document.querySelector("#submit-btn");
const message = document.querySelector("#message");

submitButton.addEventListener('click', function () {
    if (costPrice.value > 0 && numberOfShares.value > 0 && sellingPrice.value > 0) {
        //add loading svg

        //message display none
        message.style.display = "none"
        setTimeout(function () {
            //svg display none

            //message display block
            message.style.display = "block"
            let cost = Number(costPrice.value);
            let sell = Number(sellingPrice.value)
            let totalShares = Number(numberOfShares.value)
            let profit = sell - cost;
            let profitPercentage = (profit / cost) * 100;
            let loss = cost - sell
            let lossPercentage = (loss / cost) * 100;
            let moneyMade = profit * totalShares;
            let moneyLost = loss * totalShares;
            if (sell > cost) {
                message.innerHTML = `You made 📈 ${moneyMade}₹ with profit percentage of ${profitPercentage}%`
            } else if (cost > sell) {
                message.innerHTML = `You lost 📉 ${moneyLost}₹ with loss percentage of ${lossPercentage}%`
            } else {
                message.innerHTML = "You did not make or loss any money"
            }
        }, 000)
    } else {
        message.innerHTML = "Enter Valid input"
    }
})