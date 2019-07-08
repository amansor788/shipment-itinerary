import axios from 'axios';

axios.defaults.headers.common['Content-Type'] = 'application/json';

export default axios.create({
  baseURL: 'https://dev-api.shipwell.com:443/v2/',
  headers: {
    'Content-Type': 'application/json',
		'Accept': 'application/json',
  }
});
