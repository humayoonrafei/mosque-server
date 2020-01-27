## A "docker-compose.yml" file must be provided with the following contents:

```yml
version: '3'
services:
  prisma:
    image: prismagraphql/prisma:1.34
    restart: always
    ports:
    - "4466:4466"
    environment:
      PRISMA_CONFIG: |
        port: 4466
        # uncomment the next line and provide the env var PRISMA_MANAGEMENT_API_SECRET=my-secret to activate cluster security
        # managementApiSecret: my-secret
        databases:
          default:
            connector: postgres
            host:
            database:
            schema: public
            user:
            password:
            ssl: true
            rawAccess: true
            port: '5432'
            migrations: true
```

## To start the Prisma server:
1. cd prisma
2. sudo docker-compose up -d
3. prisma deploy

