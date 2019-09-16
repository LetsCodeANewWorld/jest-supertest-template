module.exports =  {
    
    searchHeaderV3Lite: {
        'Authorization': 'Bearer ',
        'Content-Type':'application/json',
        'X-Correlation-Id': '123456',
        'X-Correlation-Source-Id':'Postman',
    },

    searchDataV3Lite: {
        "keywords": [""],
        "Locations": [{"locationname": "Belfast","distance":10}],
        "take" : 150
        
    },
    searchHeaderV2: {
        'Authorization': `Bearer `,
        'Content-Type':'application/json',
    },

    searchDataV2: {
        "keywords": [""],
        "Locations": [{"locationname": "Belfast","distance":10}],
        "take" : 150        
    }
}