const bill = document.getElementById("Amount");
const tip = document.getElementById("Percent");
const tipbtn = document.getElementById("tipbtn");
const tipAmount = document.getElementById("tipAmount");
const total = document.getElementById("totalAmount");
tipbtn.addEventListener("click", function() {

    const billAmount = parseFloat(bill.value);
    const tips = parseFloat(tip.value);
    if (isNaN(billAmount) || isNaN(tips)) {
    tipAmount.innerText = "Please enter valid numbers.";
    total.innerText = "";
    return;
    }
    const tipAm = billAmount * (tips / 100);
    const totalAm = billAmount + tipAm;

    tipAmount.innerText = `Tip: $${tipAm.toFixed(2)}`;
    total.innerText = `Total: $${totalAm.toFixed(2)}`;

});