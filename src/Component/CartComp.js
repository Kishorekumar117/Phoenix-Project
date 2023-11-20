import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Col, Row, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const CartComp = () => {
    const [userCart, setUserCart] = useState([]);
    const userID = sessionStorage.getItem('userID'); // Get the userID from sessionStorage

    


    const fun = (name, price) => {
        let lastId = localStorage.getItem('lastId') || 0;
        lastId = parseInt(lastId) + 1;
        localStorage.setItem('lastId', lastId);
        const newPurchase = {
            id: lastId.toString(),
            productname: name,
            productprice: price,
            useremail: 'user@example.com', // Replace with actual email
            username: 'New User' // Replace with actual username
        };

        // Axios POST request to insert data
        axios.post('http://localhost:8888/purchase', newPurchase)
            .then(response => {
                window.alert("Product Ordered Successfully!, Product Name: " + name + " Price: " + price);
                
                console.log('Data inserted:', response.data);
                // Handle the response or update state if needed
            })
            .catch(error => {
                console.error('Error inserting data:', error);
                // Handle errors if necessary
            });
    };

    const fetchUserCart = () => {
        if (!userID) {
            console.error('User ID not found in sessionStorage');
            return;
        }

        axios.get(`http://localhost:8888/cart?userId=${userID}`) // Adjust the API endpoint to fetch cart items for a specific user
            .then((res) => {
                setUserCart(res.data);
            })
            .catch((err) => {
                console.error('Error fetching user cart data:', err);
            });
    };

    const deleteContact = (id) => {
        if (window.confirm(`Are you sure to remove the Product from cart?`)) {
            axios.delete(`http://localhost:8888/cart?cartId=${id}`)
                .then(() => {
                    window.alert("Product removed successfully");
                   fetchUserCart();
                })
                .catch((err) => {
                    console.error('Error deleting user:', err);
                });
        }
    };

    useEffect(() => {
        fetchUserCart();
    }, [userID]); // Trigger fetchUserCart when userID changes

    return (
        <div className="container mt-4">
            <h2>User Cart</h2>
            <Row xs={1} md={2} lg={3} className="g-4">
                {userCart.map((item) => (
                    <Col key={item.cartId}>
                        <Card>
                            <Card.Body>
                                <Card.Title>Products</Card.Title>
                                <Card.Text>
                                    <strong>Product Name:</strong> {item.productName}<br />
                                    <strong>Product Price:</strong> {item.productPrice}<br />
                                    <strong>User ID:</strong> {item.userId}<br /><br />
                                    <Button onClick={() => fun(item.productName, item.productPrice)}>Buy Now</Button><br /><br />
                                    <Button onClick={() =>deleteContact(item.cartId) }>Remove item</Button>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default CartComp;