const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');
const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');

const getInfo = async (event) => {
    event.preventDefault();

    let cityVal = cityName.value;
    if (cityVal === '') {
        city_name.innerText = `Plz write the city name before search`;
    }

    else {
        try {
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=b8ece4fe10bb3d282b1914b1d613b614`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];

            city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`;
            temp.innerText = Math.round(arrData[0].main.temp - 273.15);
            const tempMood = arrData[0].weather[0].main;
            
            //condition to check the sunny or cloudy
            if (tempMood === "Clear") {
                temp_status.innerHTML =
                    "<i class = 'fas fa-sun' style = 'color:#eccc68;'></i>";
            } else if (tempMood === "Clouds") {
                temp_status.innerHTML =
                    "<i class = 'fas fa-cloud' style = 'color:#f1f2f6;'></i>";
            } else if (tempMood === "Rain") {
                temp_status.innerHTML =
                    "<i class = 'fas fa-cloud-rain' style = 'color:#a4b0be;'></i>";
            } else {
                temp_status.innerHTML =
                    "<i class = 'fas fa-sun' style = 'color:#eccc68;'></i>";
            }

        } catch {
            city_name.innerText = `Plz enter the city name properly`;
        }

    }
}

submitBtn.addEventListener('click', getInfo);