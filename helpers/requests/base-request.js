const path = require('path');
require('dotenv').config({path: path.resolve(process.cwd(), 'data.env')});
let supertest = require('supertest');
let request;
let baseUrl;

export default {

    // Performs GET request
    GET(endpoint) {
        this.setBaseURL();
        // Returns response from GET request
        return request
            .get(endpoint);
    },
    // Performs POST request
    POST(endpoint, params, headers = {}) {

        this.setBaseURL();
        // Returns response from POST request
        return request
            .post(endpoint)
            .send(params)
            .set(headers);
    },

    // Performs PATCH request
    PATCH(endpoint, params, headers = {}) {

        this.setBaseURL();
        // Returns response from POST request
        return request
            .patch(endpoint)
            .send(params)
            .set(headers);
    },

    
    // Performs PUT request
    PUT(endpoint, params, headers = {}) {

        this.setBaseURL();
        // Returns response from POST request
        return request
            .put(endpoint)
            .send(params)
            .set(headers);
    },

    
    // Performs DELETE request
    PATCH(endpoint, params, headers = {}) {

        this.setBaseURL();
        // Returns response from POST request
        return request
            .delete(endpoint)
            .set(headers);
    },

    setBaseURL() {
        baseUrl = process.env.BASE_URL;
        request = supertest.agent(baseUrl);
    }
}
