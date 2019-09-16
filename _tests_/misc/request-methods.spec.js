require('dotenv').config();
import { config } from '../../config';
import { sendRequest, resourceCreator } from '../../helpers';

let userId;

process.env.BASE_URL =  config[process.env.NODE_ENV].jsonurl

describe('GET request for users list', () => {

    test('Check if user exist', async () => {
        userId = 2;
        const response = await sendRequest.GET(`/api/users/${userId}`);
        // Check status code
        expect(response.status).toEqual(200);           
    });

    test('Check if invalid user does not exist', async () => {
        userId = 23;
        const response = await sendRequest.GET(`/api/users/${userId}`);
        // Check status code
        expect(response.status).toEqual(404);        
    })
})

describe('POST request to create users', () => {
    test('Create an user', async () => {
        
        // Get user details from faker
        const firstName = resourceCreator.testUserDetails().user.name;
        // Perform post request
        const response = await sendRequest.POST('/api/users', resourceCreator.testUserDetails().user);
        // Check status code
        expect(response.status).toEqual(201);
        // Check userName
        expect(response.body.name).toEqual(firstName);
    })
})
