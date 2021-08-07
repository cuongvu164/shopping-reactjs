import axios from 'axios';
import * as api_url from '../redux/actionTypes';

export default async function API(endpoint, method, body) {
  return await axios({
    method: method,
    url: `${api_url.API_URL}/${endpoint}`,
    data: body,
    headers: {
      "Content-type": "application/json"
    }
  }).catch((err) => {
    console.log('Error', err)
  })
}
