docker pull prismagraphql/mongo-single-replica:5.0.3

docker run --name mongo \
 -p 27018:27017 \
 -e MONGO_INITDB_ROOT_USERNAME="payer" \
 -e MONGO_INITDB_ROOT_PASSWORD="123123" \
 -d prismagraphql/mongo-single-replica:5.0.3

"prisma:build": "npx prisma generate --schema=./prisma/master/schema.prisma && npx prisma generate --schema=./prisma/tenant/schema.prisma",
"studio:master": "npx prisma studio --schema ./prisma/master/schema.prisma",
"studio:tenant": "npx prisma studio --schema ./prisma/tenant/schema.prisma",
