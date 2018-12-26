import axios from 'axios';
import getData from './data';

export default async function getStops(route, direction) {

let routesUrl = 'https://svc.metrotransit.org/NexTrip/Routes?format=json';
// get routeId to request stops
let routeId = await getData(routesUrl, 'Description', 'Route', route);

let directionsUrl = 'https://svc.metrotransit.org/NexTrip/Directions/' + routeId + '?format=json';
// get directionId to request stops
let directionId = await getData(directionsUrl, 'Text', 'Value', direction);

let stopsUrl = 'https://svc.metrotransit.org/NexTrip/Stops/' + routeId + '/' + directionId + '?format=json';

try {
    const response = await axios.get(stopsUrl);
    let data = response.data;
    let stops = [];

    data.forEach((item) => {
        stops.push(item.Text);
    })
    
    return stops;

  } catch (error) {
    console.error('This is error: ', error);
  }
}