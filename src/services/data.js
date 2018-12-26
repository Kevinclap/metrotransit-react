import axios from 'axios';

export default async function getData(url, key, value, arg) {
    try {
        const response = await axios.get(url);
        let data = response.data;

        for (item of data) {
            
            if (arg === item[key]) {
                return item[value];
            }
        }
      } catch (error) {
        console.error('This is error: ', error);
      }
}