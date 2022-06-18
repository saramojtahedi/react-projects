import { Button, Col } from 'react-bootstrap'
import React from 'react'
import Wrapper from '../Wrapper'
import { useProducts, useProductsActions } from './ProductsProvider'

const Products = () => {
    const products = useProducts()
    const dispatch = useProductsActions()

    return (
        <Wrapper linkTitle='مدیریت محصولات'>
            <div className='products-container'>
                {products.map(item => (
                    <Col md={6} key={item.id} className='product'>
                        <input value={item.name} onChange={(e) => dispatch({type:"EDIT", id: item.id, event: e})} />
                        <span>{item.quantity}</span>
                        <div className='actions'>
                            <Button className='add' onClick={() => dispatch({type:"INCREASE", id: item.id})}>+</Button>
                            {item.quantity === 1 ?
                                <Button className='reduce' onClick={() => dispatch({type:"REMOVE", id: item.id})}>&times;</Button>
                            :
                                <Button className='reduce' onClick={() => dispatch({type:"DECREASE", id: item.id})}>-</Button>
                            }
                        </div>
                    </Col>
                ))}
            </div>
        </Wrapper>
    )
}

export default Products
