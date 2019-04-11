import axios from 'axios';

export default axios.create({
    headers: {
        Authorization: 'Client-ID bc5e7a94498f494d6ac60af7e512af33bdb27675c45bbd074f8442993e056912'
    },
    baseURL: 'https://api.unsplash.com'
});