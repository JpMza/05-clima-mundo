const axios = require('axios');


const getLugarLatLng = async (dir) => {

    const encondedUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://rapidapi.p.rapidapi.com/weather?q=${encondedUrl}`,
        headers: {
            "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
            "x-rapidapi-key": "fd80c779c2mshecf1a5812689bcap1e7032jsnc2d7ecc2a49e",
            "useQueryString": true
        }
    });

    const resp = await instance.get()

    if (resp.data.lenght === 0) {
        throw new Error(`No hay resultados para ${dir}`)
    }

    const data = resp.data;
    const direccion = data.name;
    const lat = data.coord.lat;
    const lng = data.coord.lon;

    return { direccion, lat, lng }
}


module.exports = {
    getLugarLatLng
}

