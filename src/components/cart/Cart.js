import React, { Component } from 'react'
import {Context,Consumer} from '../../Context'
import Title from '../Title'
import CartColums from './CartColums'
import EmptyCart from './Empty-Cart'
import CartList from './CartList'
import CartTotal  from './CartTotal'
 
 class Cart extends Component {
  render() {
    return (
        <Consumer>
          {value=>{
            const {cart}=value
            let cartContent;
            if(cart.length === 0){
              cartContent =<EmptyCart/>
            }else{
              cartContent =<React.Fragment>
                <Title name="your" title="cart"/>
                <CartColums/>
                <CartList value={value}/>
                <CartTotal value ={value}/>
              </React.Fragment>
              
            }
            return(
              <React.Fragment>
                <section>
                  {cartContent}
                </section>
              </React.Fragment>
            )
          }}
        </Consumer>
    )
  }
}

Cart.contextType =Context
export default Cart
