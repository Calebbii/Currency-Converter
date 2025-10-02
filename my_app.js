console.log("It works")


// Fetch API
    // Function or method used to make HTTP requests to the server
    // Interact with API

// HTTP Verbs
// GET
// PUT
// POST
// DELETE

// Fetch Syntax
// fetch(url, {method: "DELETE"})

const baseURL = "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_6ynVxAILR1WwcxOZ7BkWXnYoYLBMcR4VMnv4JAkL"


// fetch(baseURL)
// .then(res => res.json())
// .then(data => console.log(data))

async function convertCurrency(amount, from, to) {
    try {
        const res = await fetch(`${baseURL}&base_currency=${from}`)
        const data = await res.json();

        // Get rate
        const rate  = data.data[to]
        const converted = (amount * rate).toFixed(2);

        return `${amount} ${from} = ${converted} ${to}`

    } catch (err){
        console.error("ERROR:", err)
        return "Conversion has Failed"
    }
}

// Form Handling
document.getElementById('converterForm').addEventListener("submit", async (e) => {
    e.preventDefault();

    const amount = parseFloat(document.getElementById("amount").value)
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value

    const resultText = await convertCurrency(amount, fromCurrency, toCurrency)

    document.getElementById("result").innerText = resultText;

})