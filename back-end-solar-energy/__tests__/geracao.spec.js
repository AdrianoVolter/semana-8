const request = require('supertest');


it ('Deve retornar 401 ,token não informado GET', async () => {
    const response = await request('http://localhost:3000').get('/api/v1/unidades');
    expect(response.status).toEqual(401);
    //console.log(response.body); 
}
);  

it ('Deve retornar 401 ,token não informado POST', async () => {
    const response = await request('http://localhost:3000').post('/api/v1/unidades');
    expect(response.status).toEqual(401);
    //console.log(response.body);
}
);