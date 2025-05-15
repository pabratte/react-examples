# Simple Express example

Minimal example of server in Express

To test run:

```
npm install
```

```
npm start
```

# How to test

List products
```
curl localhost:3000/api/products
```

Add new product
```
curl -X POST localhost:3000/api/products -H "Content-Type: application/json" --data '{"name":"Product 1","price":30}'
```

Update product with id = 1
```
curl -X PUT localhost:3000/api/products/1 -H "Content-Type: application/json" --data '{"name":"Updated Product 1","price":60}'
```

Delete product with id = 1
```
curl -X DELETE localhost:3000/api/products/1 
```