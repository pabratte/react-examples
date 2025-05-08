let products = []

export const getAllProducts = (req, res) => {
    res.status(200).json(products);
}

export const addProduct = (req, res) => {
    const { name = null, price = null} = req.body;
    if (!name || !price) {
        return res.status(400).json({ message: 'Name and price are required' });
    }
    const newProduct = {
        id: products.length + 1,
        name,
        price
    };
    products.push(newProduct);
    res.status(201).json(newProduct);
}

export const updateProduct = (req, res) => {
    const { productId } = req.params;
    const productIndex = products.findIndex(product => product.id === parseInt(productId));
    
    if (productIndex === -1) {
        return res.status(404).json({ message: 'Product not found' });
    }
    
    const { name = null, price = null} = req.body;
    if (!name || !price) {
        return res.status(400).json({ message: 'Name and price are required' });
    }
    products[productIndex] = { id: parseInt(productId), name, price };
    res.status(200).json(products[productIndex]);
}

export const deleteProduct = (req, res) => {
    const { productId } = req.params;
    const productIndex = products.findIndex(product => product.id === parseInt(productId));
    
    if (productIndex === -1) {
        return res.status(404).json({ message: 'Product not found' });
    }
    
    products.splice(productIndex, 1);
    res.status(204).send();
}
