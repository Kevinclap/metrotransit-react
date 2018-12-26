import axios from 'axios';

export default async function getRoutes() {

// Find the routeId for route from args
let url = 'http://svc.metrotransit.org/NexTrip/Routes?format=json';
try {
    const response = await axios.get(url);
    let data = response.data;
    let routes = [];

    data.forEach((item) => {
        routes.push(item.Description);
    })
    
    return routes;

  } catch (error) {
    console.error('This is error: ', error);
  }
}
