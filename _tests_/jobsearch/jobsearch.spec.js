import { config } from '../../config';
import { sendRequest } from '../../helpers';
import { jobSearchData } from '../../testData';

process.env.BASE_URL =  config[process.env.NODE_ENV].url

let access_token;

beforeAll( async () => {

    const identityParams = {
        grant_type: 'client_credentials',
        scope: 'jobsearchapi',
        client_id: 'jobsearchclient',
        client_secret: process.env.SECRET
    }

    const identityHeader = {
        'Content-Type': 'application/x-www-form-urlencoded'
    }

    //validate identity 
    const response = await sendRequest.POST('identity/connect/token', identityParams, identityHeader);
    expect(response.statusCode).toBe(200);

    access_token = response.body.access_token;

    process.env.access_token = access_token;
    console.log('env access token is : ', process.env.access_token);
})


describe('Job Search', () => {


    test('Job search on V3 lite', async () => {

        jobSearchData.searchHeaderV3Lite.Authorization = `Bearer ${process.env.access_token}`

        const response = await sendRequest.POST('api/jobsearch/v3/search/lite', jobSearchData.searchDataV3Lite, jobSearchData.searchHeaderV3Lite);
        
        expect(response.statusCode).toBe(200);        
        expect(response.body.searchResults.results[0]).toHaveProperty('id');
        expect(response.body.searchResults.results[0]).toHaveProperty('title');        
    });

    test('Job search on V2 ', async () => {
        
        jobSearchData.searchHeaderV2.Authorization = `Bearer ${process.env.access_token}`

        const response = await sendRequest.POST('api/jobsearch/v2/search', jobSearchData.searchDataV2, jobSearchData.searchHeaderV2);
        
        expect(response.statusCode).toBe(200);
    });  
})