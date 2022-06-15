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

            // Wcity_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            // temp.innerText = arrData[0].main.temp;
            // temp_status.innerText = arrData[0].eather[0].main;

        } catch {
            city_name.innerText = `Plz enter the city name properly`;
        }

    }
}

submitBtn.addEventListener('click', getInfo);