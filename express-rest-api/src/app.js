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

app.get('/products', getAllProducts);
app.post('/products', addProduct);
app.put('/products/:productId', updateProduct);
app.delete('/products/:productId', deleteProduct);
