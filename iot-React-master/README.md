# Etapas para execução

1. Ter o *docker* instalado
    - https://www.docker.com/products/docker-desktop/
2. Executar o comando `docker compose up -d` para iniciar as dependências
    - Se for utilizar uma URI insira ela no campo MONGODB no .env
3. Executar o comando `npm run server` para popular o banco e iniciar o servidor *express*
4. Executar o comando `npm run dev` para iniciar o projeto
    - Está com *hot reload* habilitado
---
