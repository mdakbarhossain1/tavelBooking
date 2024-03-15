import { useState, useEffect } from 'react';

function UpdateTourPlace() {
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({ id: '', name: '', image: '', price: '' });


    // Fetch All product
    useEffect(() => {
        fetch('http://localhost:5000/api/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }, []);

    console.log(products)

    // const fetchProducts = async () => {
    //     try {
    //         const response = await fetch('http://localhost:5000/api/products');
    //         if (!response.ok) {
    //             throw new Error('Failed to fetch products');
    //         }
    //         const data = await response.json();
    //         setProducts();data
    //     } catch (error) {
    //         console.error('Error fetching products:', error);
    //     }
    // };

    const handleInputChange = event => {
        const { name, value } = event.target;
        setNewProduct({ ...newProduct, [name]: value });
        console.log(newProduct);
    };

    const handleSubmit = async event => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newProduct)
            });
            if (!response.ok) {
                throw new Error('Failed to add product');
            }
            setNewProduct({ id: '', name: '', image: '', price: '' });
            fetchProducts();
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };

    const updateProduct = async (productId, updatedProduct) => {
        try {
            const response = await fetch(`http://localhost:5000/api/products/${productId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedProduct)
            });
            if (!response.ok) {
                throw new Error('Failed to update product');
            }
            fetchProducts();
        } catch (error) {
            console.error('Error updating product:', error);
        }
    };

    return (
        <div>
            <h1>Product Management</h1>
            <div>
                <h2>Add New Product</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="id" placeholder="ID" value={newProduct.id} onChange={handleInputChange} />
                    <input type="text" name="name" placeholder="Name" value={newProduct.name} onChange={handleInputChange} />
                    <input type="text" name="image" placeholder="Image URL" value={newProduct.image} onChange={handleInputChange} />
                    <input type="text" name="price" placeholder="Price" value={newProduct.price} onChange={handleInputChange} />
                    <button type="submit">Add Product</button>
                </form>
            </div>
            <div>
                <h2>Products</h2>
                <ul>
                    {products.map(product => (
                        <li key={product.id}>
                            <p>ID: {product.id}</p>
                            <p>Name: {product.name}</p>
                            <p>Image: <img src={product.image} alt={product.name} /></p>
                            <p>Price: ${product.price}</p>
                            <button onClick={() => updateProduct(product.id, { ...product, name: 'Updated Product' })}>Update Product</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default UpdateTourPlace;
