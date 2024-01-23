import axios from 'axios';

export default defineEventHandler(async (event) => {
    const response = await axios.get('http://paid1.daki.cc:4043/stats');
    return response.data;
});