//Hvatanje HTML elemenata
const search = document.getElementById("polje");
const batn = document.getElementById("pretraga");
const grad = document.getElementById("grad");
const celzijusi = document.getElementById("celzijusi");
const prviDio = document.getElementById("prviDio");
const drugiDio = document.getElementById("drugiDio");
const randomPage = Math.floor(Math.random() * 10);
const vjetar = document.getElementById("vjetar");
const minTemp = document.getElementById("minTemp");
const maxTemp = document.getElementById("maxTemp");

//gumb SEARCH
batn.addEventListener("click", function () {
  //fetch sa openweathermap-a
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${search.value}&appid=bf28dfea4665adbf6c8dc41788d5b6df&units=metric`
  )
    .then((response) => response.json())
    .then((data) => {
      try {
        console.log(data);
        //Dodavanje rezultata
        prviDio.classList.add("d-none");
        //Uklanjanje header-a
        drugiDio.classList.remove("d-none");

        grad.innerText = `${data.name}, ${data.sys.country}`;
        celzijusi.innerText = `${data.main.temp}°C`;
        vjetar.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-wind" viewBox="0 0 16 16">
          <path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5zm-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2zM0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5z"/>
          </svg> Vjetar je ${data.wind.speed} km/h`;
        minTemp.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-thermometer-low" viewBox="0 0 16 16">
          <path d="M9.5 12.5a1.5 1.5 0 1 1-2-1.415V9.5a.5.5 0 0 1 1 0v1.585a1.5 1.5 0 0 1 1 1.415z"/>
          <path d="M5.5 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0V2.5zM8 1a1.5 1.5 0 0 0-1.5 1.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0l-.166-.15V2.5A1.5 1.5 0 0 0 8 1z"/>
          </svg> Minimalna temperatura: ${data.main.temp_min}°C`;
        maxTemp.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-thermometer-high" viewBox="0 0 16 16">
          <path d="M9.5 12.5a1.5 1.5 0 1 1-2-1.415V2.5a.5.5 0 0 1 1 0v8.585a1.5 1.5 0 0 1 1 1.415z"/>
          <path d="M5.5 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0V2.5zM8 1a1.5 1.5 0 0 0-1.5 1.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0l-.166-.15V2.5A1.5 1.5 0 0 0 8 1z"/>
          </svg> Maksimalna temperatura: ${data.main.temp_max}°C`;
      } catch (err) {
        alert("Pogreška!");
      }
    });
});

// onLoad funkcija
addEventListener("load", function () {
  //apply slika s pexelsa
  fetch(
    `https://api.pexels.com/v1/search?query=weather&orientation=landscape&page=${randomPage}`,
    {
      headers: {
        Authorization:
          "563492ad6f91700001000001e0175bca22fe41cf9fb1cc1f1b377c8b",
      },
    }
  )
    .then((resp) => {
      return resp.json();
    })
    .then((slike) => {
      console.log(slike);
      const rendom = Math.floor(Math.random() * slike.photos.length);
      setInterval(function () {
        document.body.style.background = `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url('${slike.photos[rendom].src.large2x}')`;
      }, 100);
    });
});
