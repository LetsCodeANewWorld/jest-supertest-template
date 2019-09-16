const path = require('path');
require('dotenv').config({path: path.resolve(process.cwd(), 'data.env')});

export default {

    "baseURL":
    "http://localhost:3000/",
    test : {
        jsSeoUrl: process.env.API_JS_SEO_DEV,
        jsonurl: process.env.API_TEST_URL_JSON,
        url: process.env.API_TEST_URL,
        user: '',
        password: '',
        server: '',
        database: '',
        connectionLimit: 50
    },

    dev: {
        url: process.env.API_DEV_URL
    }
}