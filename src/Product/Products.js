import React, { Component } from 'react';
import { Card, ListGroup } from 'react-bootstrap';


     
class Products extends Component {
    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', padding: 30 }}>
                <div><h2>Images</h2>
                    <Card style={{ width: '18rem' }}>
                        <ListGroup>
                            <ListGroup.Item>Product <img src="/pg1.png" alt="img"></img></ListGroup.Item>
                            <ListGroup.Item>Product 2</ListGroup.Item>
                            <ListGroup.Item>Product 3</ListGroup.Item>
                        </ListGroup>
                        

                    </Card>
                </div>
            </div>
        );
    }
}

export default Products;