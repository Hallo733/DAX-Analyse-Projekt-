
const apiBase = "https://scythe-destiny-field.glitch.me/indicator";
const symbol = "DAX";

const indicators = ["rsi", "macd", "adx", "cci", "bbands"];

indicators.forEach(indicator => {
    fetch(`${apiBase}/${indicator}?symbol=${symbol}`)
        .then(res => res.json())
        .then(data => {
            document.getElementById(indicator).innerText = data.value ?? "Keine Daten";
        })
        .catch(err => {
            document.getElementById(indicator).innerText = "Fehler beim Laden";
        });
});
