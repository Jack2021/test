const fetch = require("node-fetch");
const app = require('./api').app;

const url = "http://localhost:3000";



test('GET /square?string=hello should return 200 and result property in body (fetch)', () => {
    return fetch(url + '/square?s=4', { method: 'GET' })
        .then(response => {
            expect(response.status).toBe(200);
            return response.json();
        })
        .then(rjson => {
            expect(rjson).toBe(2);
        });
});