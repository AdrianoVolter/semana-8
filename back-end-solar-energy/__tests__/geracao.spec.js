const request = require('supertest');

describe('Teste de autenticação', () => {
    it('Deve retornar 401 quando o token não é informado', async () => {
      const response = await request('http://localhost:3000')
        .post('/api/v1/geracao')
        .send({ /* dados que você deseja enviar na solicitação POST */ });
  
      expect(response.status).toBe(401);
    });
    it('Deve retornar 200 quando o token é informado', async () => {
        // Suponha que você tenha um token válido para autenticação
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InZvbHRlckB2b2x0ZXIuY29tIiwiaWF0IjoxNjk1NjcxMjQyfQ.UeD9fmEIt2K4_yzrHBVpbtnI-I2RyNoDpt5kaYyG9c';
    
        const response = await request('http://localhost:3000')
          .get('/api/v1/geracao')
          .set('Authorization', `Bearer ${token}`)
            
        expect(response.status).toBe(200);
      });

    });

// describe('Teste de cadastro de geração', () => {
//     it('Deve retornar 401 quando o token não é informado', async () => {
//         const response = await request('http://localhost:3000')
//             .post('/api/v1/geracao')
//             .send({ /* dados que você deseja enviar na solicitação POST */ });
    
//         expect(response.status).toBe(401);
//         });
//     it('Deve retornar 201 quando o token é informado', async () => {
