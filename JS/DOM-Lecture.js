var promptAnswer = prompt("what yo name is?");
var promptWeather = prompt("What is the weather like today?")
var retrievedP = document.getElementById("weather")
retrievedP.innerHTML = "the weather is" + promptWeather + "today"