import axios from 'axios'


const instance = axios.create({
    baseURL: 'https://yalantis-react-school-api.yalantis.com',
    headers: {
        'content-type':'application/octet-stream',
    },
});

export default {
    getData: () =>
        instance({
            'method':'GET',
            'url':'/api/task0/users',
            'params': {
                'search':'parameter',
            },

        }),

    postData: () =>
        instance({
            'method': 'POST',
            'url':'/api',
            'data': {
                'item1':'data1',
                'item2':'item2'
            },
            'headers': {
                'content-type':'application/json'  // override instance defaults
            }
        })
}