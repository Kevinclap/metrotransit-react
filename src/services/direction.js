import axios from 'axios';
import getData from './data';

export default async function getDirections(route) {

let routesUrl = 'https://svc.metrotransit.org/NexTrip/Routes?format=json';
// get routeid to request directions
let routeId = await getData(routesUrl, 'Description', 'Route', route);

let directionsUrl = 'https://svc.metrotransit.org/NexTrip/Directions/' + routeId + '?format=json';


try {
    const response = await axios.get(directionsUrl);
    let data = response.data;
    let directions = [];

    data.forEach((item) => {
        directions.push(item);
    })
    
    return directions;

  } catch (error) {
    console.error('This is error: ', error);
  }
}
