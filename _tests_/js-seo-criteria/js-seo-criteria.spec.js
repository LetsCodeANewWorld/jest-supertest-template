const path = require('path');
require('dotenv').config({path: path.resolve(process.cwd(), 'data.env')});
import { config } from '../../config';
import { sendRequest } from '../../helpers';
import { jsSeoTestData } from '../../testData';

let endpoint;

describe('POST request to JS Seo criteria endpoint', () => {

    beforeEach(() => {
        // get base url
        process.env.BASE_URL =  config[process.env.NODE_ENV].jsSeoUrl;
        // Set endpoint
        endpoint = '/job-search-seo-experience/criteria/';
    })

    test('Check if keyword and location are populated correctly', async () => {

        // Perform POST request       
        const response = await sendRequest.POST(endpoint, jsSeoTestData.searchUrls.keywordWithLocation, jsSeoTestData.jsSeoCriteriaHeader);

        // Check status code
        expect(response.status).toEqual(200);
        // Check keyword matches with searchUrl
        expect(response.body.jobSearchCriteria.keywords).toEqual('Developer');
        // Check location matches with searchUrl
        expect(response.body.jobSearchCriteria.location).toBe('London');
    })

    test('Check if keyword and new location are populated correctly', async () => {

        // Perform POST request
        const response = await sendRequest.POST(endpoint, jsSeoTestData.searchUrls.keywordWithNewLocation, jsSeoTestData.jsSeoCriteriaHeader);

        // Check status code
        expect(response.status).toEqual(200);
        // Check keyword matches with searchUrl
        expect(response.body.jobSearchCriteria.keywords).toEqual('Police Officer');
        // Check location matches with searchUrl
        expect(response.body.jobSearchCriteria.location).toBe('Worthing');
    })
})

// Checks JS SEO Url endpoint
describe('POST Request for JS Seo url endpoint', () => {

    beforeEach(() => {
        // Set endpoint
        endpoint = '/job-search-seo-experience/url/';     
    })

    test('Check the url for given keyword and location', async () => {
        // Performs POST request
        const response = await sendRequest.POST(endpoint, jsSeoTestData.keywordLocation.search, jsSeoTestData.jsSeoUrlHeader);

        // Check status code
        expect(response.status).toBe(200);
        // Check the url returned for the given keyword and location
        expect(response.body.url).toBe("/jobs/developer-jobs-in-london")
    })
})