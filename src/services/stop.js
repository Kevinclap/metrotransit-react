import axios from 'axios';
import getData from './data';

export default async function getStops(route, direction) {

console.log('This is route from getStop: ', route);
console.log('This is direction from getStop', direction);

let routesUrl = 'http://svc.metrotransit.org/NexTrip/Routes?format=json';
let routeId = await getData(routesUrl, 'Description', 'Route', route);
console.log('This is routeId in direction: ', routeId);

let directionsUrl = 'http://svc.metrotransit.org/NexTrip/Directions/' + routeId + '?format=json';
let directionId = await getData(directionsUrl, 'Text', 'Value', direction);

console.log('url from stops: ', directionsUrl);

let stopsUrl = 'http://svc.metrotransit.org/NexTrip/Stops/' + routeId + '/' + directionId + '?format=json';

try {
    const response = await axios.get(stopsUrl);
    let data = response.data;
    let stops = [];

    data.forEach((item) => {
        stops.push(item.Text);
    })
    console.log("This is Stops inside direction.js: ", stops);
    return stops;

  } catch (error) {
    console.error('This is error: ', error);
  }
}