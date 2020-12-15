const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direcion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


const getInfo = async (dir) => {

    try {
        const coords = await lugar.getLugarLatLng(argv.direccion);
        
        const temp = await clima.getClima(coords.lat, coords.lng);
        
        return `El clima de ${coords.direccion} es de ${temp} °`;

    } catch (error) {
        throw new Error(`No se pudo determinar el clima de ${dir}`)
    }
   
}

getInfo(argv.direccion)
    .then(res => console.log(res))
    .catch(e => console.log(e));