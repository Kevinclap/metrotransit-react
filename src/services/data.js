import axios from 'axios';

export default async function getData(url, key, value, arg) {
    try {
        const response = await axios.get(url);
        let data = response.data;
        console.log('This is response from data.js: ', response.data);

        for(const item of data) {
            console.log('this is item inside data function: ', item);
            if (arg === item[key]) {
                console.log('This is item from data: ', item[value]);
                return item[value];
            }
        }
      } catch (error) {
        console.error('This is error: ', error);
      }
}