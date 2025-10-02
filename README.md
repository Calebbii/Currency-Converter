# 🌍 Currency Converter

A simple JavaScript currency converter that fetches live exchange rates from the FreeCurrencyAPI and allows users to convert between different currencies directly in the browser.

## 🚀 Features

- Fetches real-time exchange rates using `fetch()`
- Converts any amount between two currencies
- Handles invalid input gracefully with error messages
- Uses async/await for clean asynchronous code
- Displays results dynamically in the web page

## 📂 Project Structure
currency-converter/
│── index.html     # Main HTML file (form & result display)
│── script.js      # JavaScript logic for fetching & converting
│── style.css      # Optional styling (if added)
│── README.md      # Project documentation


## ⚙️ How It Works
- User enters an amount and selects From Currency and To Currency in the form.
- The app makes a request to FreeCurrencyAPI to fetch the latest rates.
- The conversion is calculated and displayed inside the page.
- If the API call fails, an error message is shown.


## 📖 Usage

- Clone the repo or copy the files.
- Get a free API key from FreeCurrencyAPI
- Replace YOUR_API_KEY in script.js with your actual key:



 ## 🔮 Future Improvements
- Add dropdowns populated dynamically with available currencies
- Show currency flags/icons
- Store conversion history in localStorage
- Improve UI with CSS/Bootstrap/Tailwind


## 📜 License