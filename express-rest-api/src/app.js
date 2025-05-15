const express = require('express');
const { getAllProducts, addProduct, updateProduct, deleteProduct } = require('./routes/products');

const app = express();
const PORT = 3000;

app.use(express.json());

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);

app.get('/api/products', getAllProducts);
app.post('/api/products', addProduct);
app.put('/api/products/:productId', updateProduct);
app.delete('/api/products/:productId', deleteProduct);
