# Geo User API

## API RESTful robusta para gerenciar usuários e localizações.

Este projeto foi construido com **NodeJs, TypeScript, Express.js, MongoDB, Docker, Mocha, Chai, Vitest e Swagger.**

## Índice

- [Instalação API](#instalação-api)
- [API Endpoints](#api-endpoints)
- [Documentação](#documentação)
- [Testes](#testes)
- [Insomnia](#insomnia)
- [Sobre](#sobre)

## Instalação API

1. Clonar o repositório:

```bash
git clone https://github.com/thomasgsquinaia/geo_user_api.git
```

2. Instalar as dependências: 

```bash
npm install
```

3. Crie um arquivo .env contendo as mesmas variáveis de ambiente presentes no arquivo .env.example, segue o exemplo abaixo:

```markdown
API_PORT=3001
DB_PORT=27017
MONGODB_URI="mongodb+srv://root:root@clusterozmap.q6natw5.mongodb.net/"
DB_NAME="geo_user_api"
DB_USER="root"
DB_PASS="MongoDB2019!"
```

4. Verifique se há algum container em execução e, se necessário, execute o seguinte comando para pará-los:

```bash
docker-compose down --remove-orphans
```

5. Digite o comando abaixo para iniciar o projeto: 

```bash
docker-compose up --build
```

6. Aguarde até que os contêineres estejam prontos para uso.


## API Endpoints
A API fornece os seguintes endpoints:

**USUÁRIOS**
```markdown
GET /users - Lista usuários cadastrados.
GET /users/:id - Lista um usuário específico cadastrado - {id}. 
POST /users - Cria um usuário - {name, email, address, coordinates}.
PUT /users/:id - Atualiza um usuário - {name, email, address, coordinates}.
DELETE /users/:id - Deleta um usuário específico - {id}.
```

**REGIÕES**
```markdown
GET /regions - Lista regiões cadastradas.
GET /regions/:id - Lista uma região específica cadastrada.
GET /regions/distance - Retonar regiões em um raio de distância a partir das coordenadas informadas e podendo filtrar por um usuário específico - {lat, lng, distance, user}.
GET /regions/:lat/:lng/specific - Retorna a listagem de regiões a uma certa distância de um ponto - {lat, lng}.
POST /regions - Cria uma região - {name, coordinates, user}.
PUT /regions/:id - Atualiza uma região - {name, coordinates, user}.
DELETE /regions/:id - Deleta uma região específica - {id}.
```

## Documentação

### Caso deseje entre nesse link para ver a documentação: 

```markdown
https://geo-user-api.onrender.com/docs
```

<p align="center">
    <img src="./.github/img/swagger-geo-user-doc1.jpeg" alt="swagger-geo-user-doc1" width="1200px">
    <img src="./.github/img/swagger-geo-user-doc2.jpeg" alt="swagger-geo-user-doc2" width="1200px">
</p>

## Testes

Para rodar os testes, execute o seguinte comando:

```bash
npm run test:all
```

<p align="center">
    <img src="./.github/img/tests.png" alt="tests" width="1200px">
</p>

## Insomnia

Caso opte por fazer as solicitações utilizando o Insomnia, é possível importar todas as coleções de solicitações a partir do arquivo `insomnia_geo_user_api.json`, localizado na raiz do projeto. 

## Sobre

Linkedin: https://www.linkedin.com/in/thomas-quinaia-82b5221b1/
