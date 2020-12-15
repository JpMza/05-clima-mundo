const axios = require('axios')

const getClima = async (lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=646734b511266bd99528ab95bbaf2825&units=metric`);
    
    return resp.data.main.temp;
}


module.exports = {
    getClima
}

