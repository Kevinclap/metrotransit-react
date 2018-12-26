import axios from 'axios';
import getData from './data';

export default async function getDirections(route) {

    console.log('This is route from getDirection: ', route);

let routesUrl = 'https://svc.metrotransit.org/NexTrip/Routes?format=json';
let routeId = await getData(routesUrl, 'Description', 'Route', route);
console.log('This is routeId in direction: ', routeId);

let directionsUrl = 'https://svc.metrotransit.org/NexTrip/Directions/' + routeId + '?format=json';

console.log('url from directions: ', directionsUrl);


try {
    const response = await axios.get(directionsUrl);
    let data = response.data;
    let directions = [];

    data.forEach((item) => {
        directions.push(item);
    })
    console.log("This is Directions inside direction.js: ", directions);
    return directions;

  } catch (error) {
    console.error('This is error: ', error);
  }
}
