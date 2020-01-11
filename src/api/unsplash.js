import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 690e7dc9ff115dddbd499b0124c8da120410ea4857d2d15bcecf15780835eba2'
    }
});