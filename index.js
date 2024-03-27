function generateQuote() {
    fetch("https://api.adviceslip.com/advice")
    .then(response => {
    if (!response.ok) {
        throw new Error("Network response was not ok");
    }
    return response.json();
    })
    .then(data => {
    const idNumber = data.slip.id;
    const quote = data.slip.advice;
    document.getElementById("idNumber").innerHTML = `ADVICE #${idNumber}`;
    document.getElementById("quoteText").innerHTML = `${quote}`;
    })
    .catch(error => {
    console.error("There was a problem fetching the quote:", error);
    });
}

document.addEventListener("DOMContentLoaded", function(event) {
    generateQuote();
});

//Add button to generate new quote when clicked
document.getElementById("generateNewButton").addEventListener("click", function(event) {
    generateQuote();
});

