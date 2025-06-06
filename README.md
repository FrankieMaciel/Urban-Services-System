# Urban Services System

## Como rodar o projeto

1. Clone o repositório e entre na pasta:

```bash
git clone https://github.com/seu-usuario/urban-services-system.git
cd urban-services-system
```

2. Crie um arquivo `.env` dentro da pasta `backend` com o seguinte conteúdo:

```
DATABASE_URL="postgresql://username:strongpassword@db:5432/postgres?schema=public"
```

(Você pode Substituir `username` e `strongpassword` por outros dados mas terá que trocar a configuração do docker-compose também)

3. Volte para a raiz do projeto e execute:

```bash
docker compose up
```


4. Acesse o sistema em:

[http://localhost:3001](http://localhost:3001)

(Caso a porta esteja diferente, é provável que a 3001 já esteja ocupada por outro processo.)
