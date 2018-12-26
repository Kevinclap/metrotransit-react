import moment from 'moment';
import getData from './data';

export default async function getNextBus(route, direction, stop) {

let url = 'https://svc.metrotransit.org/NexTrip/'

// Calculate time until next bus arrival
async function getTime(dateString) {

    let timeStampString = dateString.substring(6,16);
    let timeStamp = moment(timeStampString, 'X').unix();
    let currentTime = moment().unix();
    let timeUntilNextBus = parseInt((timeStamp - currentTime) / 60);
    return timeUntilNextBus;

}

// Find the routeId for route from args
let routesUrl = url + 'Routes?format=json';
let routeId = await getData(routesUrl, 'Description', 'Route', route);

// Kill process if route is not valid
if(!routeId) {
    return console.log(route + ' is not a valid route.')
}

// Find the directionId for direction from args
let directionsUrl = url + 'Directions/' + routeId + '?format=json';
let directionId = await getData(directionsUrl, 'Text', 'Value', direction);

// Kill process if direction is not valid
if(!directionId) {
    return console.log(route + ' doesn\'t go ' + direction);
}

// Find the stopId for stop from args
let stopsUrl = url + 'Stops/' + routeId + '/' + directionId + '?format=json';
let stopId = await getData(stopsUrl, 'Text', 'Value', stop);

// Kill process if stop is not valid
if(!stopId) {
    return console.log(stop + ' it\'s not a valid stop for route ' + route + ' ' + direction);
}

// Find TimeStamp string according to route, direction and stop id's
let timeUrl = url + routeId + '/' + directionId + '/' + stopId + '?format=json';
let time = await getData(timeUrl, 'RouteDirection', 'DepartureTime', direction);

// Kill process if time is not valid
if(!time) {
    return console.log('Could not get next connection');
}

// Calculate time until next bus
let timeUntilNextBus = await getTime(time);

if (timeUntilNextBus > 1) { 
    console.log('Next bus arriving in ', timeUntilNextBus, ' minutes!');
    return 'Next bus arriving in ' + timeUntilNextBus + ' minutes!';
} else {
    console.log('Next bus arriving in 1 minute or less');
    return 'Next bus arriving in 1 minute or less';
}
}