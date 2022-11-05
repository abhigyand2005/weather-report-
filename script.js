const input = document.getElementById("ram");
let btn = document.getElementById("add");
const form = document.getElementById("formSubmit");
const current = document.getElementById("current");
const feel = document.getElementById("feel");
const humidity = document.getElementById("humidity");
const locationData = document.getElementById("location");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputVal = input.value;
  const cityApi = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=fffb6bf859272c1f43437c6acfa2cc82&units=metric`;
  fetch(cityApi)
    .then((res) => res.json())
    .then((api) => {
      console.log(api);
      current.innerHTML = api.main.temp;
      feel.innerHTML = api.main.feels_like;
      humidity.innerHTML = api.main.humidity;
      locationData.innerHTML = api.name;
    });
});
window.addEventListener("load", (event) => {
  navigator.geolocation.getCurrentPosition(showPosition);
  function showPosition(position) {
    const lat = position.coords.latitude;
    console.log({ lat });
    const long = position.coords.longitude;
    console.log({ long });
    let locationApi = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=fffb6bf859272c1f43437c6acfa2cc82&units=metric`;

    fetch(locationApi)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        current.innerHTML = data.main.temp;
        feel.innerHTML = data.main.feels_like;
        humidity.innerHTML = data.main.humidity;
        locationData.innerHTML = data.name;
      });
  }
});
