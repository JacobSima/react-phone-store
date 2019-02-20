import React, { Component } from 'react'
import Product from './Product'
import Title from './Title'
import {Consumer} from '../Context'

 class ProductList extends Component {
  render() {
    return(
      <Consumer>
          {value=>{
            const {products}=value
            return (
            <React.Fragment>
                <div className="py-5">
                  <div className="container">
                  <Title name="our" title="products"/>
                  <div className="row">
                    {products.map(product=>(
                      <Product key={product.id} product={product}/>
                    ))}
                    </div>
                  </div>
                </div>
           </React.Fragment>
        )
          }}
      </Consumer>
    )   
  }
}

export default ProductList



