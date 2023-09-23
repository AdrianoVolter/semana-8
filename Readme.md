# Projeto Solar Energy

<p> Este é o README para o Projeto Solar Energy, um sistema de gerenciamento de energia solar que consiste em um frontend e um backend desenvolvidos usando Node.js, Express.js, Sequelize, JWT, Jest, Swagger, e Postgres. Este projeto permite que os usuários monitorem e controlem a produção de energia solar em suas instalações.

## Estrutura do Projeto

O projeto é dividido em duas partes principais:

<ol>
<li><strong>Frontend</strong>: Esta parte do projeto é responsável pela interface do usuário e permite que os usuários visualizem dados relacionados à energia solar, como produção e consumo. O frontend foi desenvolvido utilizando tecnologias modernas de front-end, como React, Redux e Material-UI.

<li><strong>Backend</strong>: O backend é responsável por gerenciar os dados relacionados à energia solar, autenticação de usuários, e fornecer uma API para o frontend. Foi construído usando Node.js e Express.js, com um banco de dados Postgres para armazenar os dados. O Sequelize é utilizado como ORM (Object-Relational Mapping) para facilitar a interação com o banco de dados. A autenticação é realizada utilizando JWT (JSON Web Tokens) para garantir a segurança das informações.



## Instalação

Para executar o projeto em sua máquina local, siga as instruções abaixo:

### Backend

1. Clone o repositório do projeto

```
git clone <URL_DO_REPOSITORIO_BACKEND>
```
2. Navegue até o diretório do projeto

```
cd backend
```
3. Instale as dependências do projeto

```
npm install
```
4. Crie um arquivo .env e adicione as variáveis de ambiente necessárias como as credenciais do banco de dados e a chave secreta JWT. Você pode usar o arquivo .env.example como referência.

```
touch .env
```
5. Execute as migrations para criar as tabelas do banco de dados

```
npx sequelize-cli db:migrate
```
6. Execute o projeto

```
npm start ou npm run dev
```
7. O servidor estará rodando em http://localhost:3000

### Frontend

1. Clone o repositório do projeto

```
git clone <URL_DO_REPOSITORIO_FRONTEND>
```
2. Navegue até o diretório do projeto

```
cd frontend
```
3. Instale as dependências do projeto

```
npm install
```
4. Execute o projeto

```
npm start
```
5. O servidor estará rodando em http://localhost:3001

## Testes

Para executar os testes do projeto, siga as instruções abaixo:

### Backend

1. Navegue até o diretório do projeto

```
cd backend
```
2. Execute os testes

```
npm test
```
### Frontend

1. Navegue até o diretório do projeto

```
cd frontend
```
2. Execute os testes

```
npm test
```
## Documentação

A documentação da API pode ser encontrada em http://localhost:3000/api-docs

## Contribuições

Contribuições são bem-vindas! Se você deseja contribuir com melhorias para este projeto, siga os passos abaixo:

1. Faça um fork deste repositório.
2. Crie uma branch para a sua feature: git checkout -b minha-nova-feature.
3. Faça as alterações desejadas e faça commits: git commit -m 'Adicionei uma nova feature'.
4. Faça o push para a sua branch: git push origin minha-nova-feature.
5. Abra um Pull Request para revisão.

