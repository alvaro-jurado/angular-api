const express = require('express');
const app = express();
const port = 3000;
const mysql = require('mysql2');
const cors = require('cors');
 
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'products',
});
 
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:4200'
}));
 
// Get all products
 
app.get('/api/products', (req, res) => {
    db.query('SELECT * FROM products', (err, results) => {
        if (err) {
            console.error('Error al obtener :', err);
            res.status(500).json({ error: 'Error al obtener products' });
        } else {
            res.json({ products: results });
        }
    });
});

app.get('/api/products/:id', (req, res) => {
    const refNum = req.params.id;
    db.query('SELECT * FROM products WHERE refNum = ?', [refNum], (err, results) => {
      if (err) {
        console.error('Error al obtener el producto:', err);
        res.status(500).json({ error: 'Error al obtener el producto' });
      } else {
        if (results.length === 0) {
          res.status(404).json({ message: 'Productos no encontrado' });
        } else {
          res.json({ products: results[0] });
        }
      }
    });
  });
 
// Insert product
app.post('/api/products', (req, res) => {
    const newProduct = req.body;
    db.query('INSERT INTO products (refNum, productName, price, productCategory, available, imgLink) VALUES (?, ?, ?, ?, ?, ?)', [newProduct.refNum, newProduct.productName, newProduct.price, newProduct.productCategory, newProduct.available, newProduct.imgLink], (err, results) => {
        if (err) {
            console.error('Error al crear el producto:', err);
            res.status(500).json({ error: 'Error al crear el producto' });
        } else {
            res.json({ message: 'Producto creado con éxito', producto: newProduct });
        }
    });
});
 

app.put('/api/products/:id', (req, res) => {
    const refNum = req.params.id;
    const updatedProduct = req.body;
    db.query('UPDATE products SET productName = ?, price = ?, productCategory = ?, available = ?, imgLink = ? WHERE refNum = ?', [updatedProduct.productName, updatedProduct.price, updatedProduct.productCategory, updatedProduct.available, updatedProduct.imgLink, refNum], (err, results) => {
      if (err) {
        console.error('Error al actualizar el product:', err);
        res.status(500).json({ error: 'Error al actualizar el product' });
      } else {
        res.json({ message: 'product actualizado con éxito', product: updatedProduct });
      }
    });
  });


  app.delete('/api/products/:id', (req, res) => {
    const refNum = req.params.id;
    db.query('DELETE FROM products WHERE refNum = ?', [refNum], (err, results) => {
      if (err) {
        console.error('Error al eliminar el product:', err);
        res.status(500).json({ error: 'Error al eliminar el product' });
      } else {
        res.json({ message: 'product eliminado con éxito' });
      }
    });
  });


app.listen(port, () => {
    console.log(`El servidor está escuchando en el puerto ${port}`);
});