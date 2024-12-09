function convertirDivisas() {
    let conversionType = document.getElementById("conversionType").value;
    let valorInput = parseFloat(document.getElementById("valorInput").value);
    let cotizacionDelDolar = 1050.0;
    let valorConvertido = 0;
  
    if (conversionType === "dolarToPesos") {
      valorConvertido = valorInput * cotizacionDelDolar;
    } else if (conversionType === "pesosToDolar") {
      valorConvertido = valorInput / cotizacionDelDolar;
    }
    valorConvertido = valorConvertido.toFixed(2);
  
    document.getElementById("valorConvertido").value = "$ " + valorConvertido;
  }
  
  document
    .getElementById("conversionType")
    .addEventListener("change", function () {
      document.getElementById("valorInput").value = "";
      document.getElementById("valorConvertido").value = "";
    });
  
  function convertirTemperatura() {
    let conversionType = document.getElementById("conversionType2").value;
    let temperatureInput = parseFloat(
      document.getElementById("temperatureInput").value
    );
    let temperatureConverted = 0;
    let unit = "";
  
    if (conversionType === "celsiusToFahrenheit") {
      temperatureConverted = (temperatureInput * 9) / 5 + 32;
      unit = "°F";
    } else if (conversionType === "fahrenheitToCelsius") {
      temperatureConverted = ((temperatureInput - 32) * 5) / 9;
      unit = "°C";
    }
    temperatureConverted = temperatureConverted.toFixed(2);
  
    document.getElementById("temperatureConverted").value =
      temperatureConverted + unit;
  }
  
  document
    .getElementById("conversionType2")
    .addEventListener("change", function () {
      document.getElementById("temperatureInput").value = "";
      document.getElementById("temperatureConverted").value = "";
    });