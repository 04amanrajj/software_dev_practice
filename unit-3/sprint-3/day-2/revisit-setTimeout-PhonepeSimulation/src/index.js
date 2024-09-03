import "./styles.css";

let walletBalance = 5000;

let payAmt = document.getElementById("pay-amt");
let balanceAmt = document.getElementById("balance-amt");
let payButton = document.getElementById("pay-btn");
let feedbackText = document.getElementById("feedback-text");

// set the text content of balanceAmt to be the wallet balance.
balanceAmt.textContent = walletBalance;

// write a function called makePayment that returns a promise.
// promise resolves after 2 seconds if the payAmount is >= balanceAmt
// promise rejects after 2 seconds if the payAmount is < balanceAmt
// the makePayment function should take in amt which is used
// to decide if the payment passes or fails.
function makePayment(payAmt) {
  console.log(payAmt);
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (payAmt && payAmt <= walletBalance)
        res((feedbackText.textContent = "Payment Done"));
      else rej((feedbackText.textContent = "Payment fails"));
    }, 2000);
  });
}

// On click of payButton invoke makePayment()
payButton.addEventListener("click", function () {
  feedbackText.textContent = "Processing...";
  makePayment(payAmt.value)
    .then((res) => {
      balanceAmt.textContent = walletBalance - payAmt.value;
    })
    .catch((err) => alert(err));
});

// in case the returned promise resolves, the feedback text & walletBalance is updated.
// in case the returned promise rejects, the feedback text is updated.
