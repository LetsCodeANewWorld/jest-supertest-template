// const config = require('../config/config.js');
import { config } from '../../config';
let request = require('supertest');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

describe('GET /users', () => {
    test('It Should respond with 200 status', async () => {
        const response = await request(config.baseURL).get('users/')
            .set('Content-Type', 'application/json')
        expect(response.statusCode).toBe(200)
    });
});


describe('GET /users/:id ', () => {
    test('It Should respond with json containing single user', async () => {
        const response = await request(config.baseURL).get('users/1')
            .set('Content-Type', 'application/json')
        expect(response.statusCode).toBe(200)
    });
});


describe('POST /users', () => {
    let data = {
        "id": "4",
        "firstName": "Lakshmi",
        "lastName": "Krishnamurthy",
        "email": "laks@reed.co.uk",
        "age": 40
    }
    it('respond with 201 created', async () => {
        const response = await request(config.baseURL).post('users')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/);
        console.log(response.body);
        expect(response.statusCode).toBe(201)
        expect(response.body.firstName).toBe('Lakshmi')

    });

});


describe('PATCH /users', () => {
    let data = {
        "firstName": "James",
        "lastName": "Reed"
    }
    it('respond with 200 created', async () => {
        const response = await request(config.baseURL)
            .patch('users/4')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/);
        expect(response.statusCode).toBe(200)
        expect(response.body.firstName).toBe('James')

    });

});

describe('DELETE /users', () => {
    it('respond with 200 created', async () => {
        const response = await request(config.baseURL).delete('users/4')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/);

        expect(response.statusCode).toBe(200)
        const res = await request(config.baseURL)
            .get('users/4')
            .set('Content-Type', 'application/json')
        expect(res.statusCode).toBe(404)

    });

});

