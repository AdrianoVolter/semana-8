const request = require("supertest");

describe("Teste de servidor", () => {
  it("Deve retornar status 200", async () => {
    const res = await request("http://localhost:3000")
      .get("/api-docs")
      .redirects(1);
    expect(res.statusCode).toEqual(200);
  }),
    it("Deve retornar status 404", async () => {
      const res = await request("http://localhost:3000")
        .get("/api-doc")
        .redirects(1);
      expect(res.statusCode).toEqual(404);
    });
});

describe("Teste de rotas de usuário", () => {
  it("Deve retornar status 200 ao logar usuario ", async () => {
    const res = await request("http://localhost:3000")
      .post("/api/v1/login")
      .send({
        email: "sergio@sergio.com",
        password: "Senha@1234",
      });
    expect(res.status).toBe(200);
  });
});
