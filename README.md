Server for Mosque project

To generate GraphQL schemas using Prisma:
1. Create the directory src/generated
2. Run ```npm run get-schema```
   
To generate TS interfaces for schemas:
1. Run ```npx ts-node src/generate-typings.ts```
2. Open the file **src/generate-typings.ts**, find the line with the error and make the first parameter non-optional
   
