# NestJS ve Prisma ORM ile Multiple Tenant

NestJS altyapısı kullanılarak Prisma ORM ile MongoDB üzerinde çoklu tenant altyapısı örneği.

MongoDB **ReplicaSet** olarak kurulmak zorunda.

## Docker ile MongoDB Kurulumu

```bash
docker pull prismagraphql/mongo-single-replica:5.0.3
```

```bash
docker run --name mongo -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME="hasankoc" -e MONGO_INITDB_ROOT_PASSWORD="123123" -d prismagraphql mongo-single-replica:5.0.3
```

## Kurulum

```bash
npm install
```

```bash
npm start prisma:build
```

İstediğiniz gibi kullanabilirsiniz..
