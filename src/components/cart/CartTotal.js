import React, { Component } from 'react'
import {Consumer} from '../../Context'
import {Link} from 'react-router-dom'
import { clearCart} from '../../actions/Actions';

 class CartTotal extends Component {
  render() {
    return (
      <Consumer>
        {value=>{
          const {dispatch,cartSubTotal,cartTax,cartTotal}=value
          return(
            <React.Fragment>
              <div className="container">
               <div className="row">
                <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                  <Link to="/">
                   <button className="btn btn-outline-danger text-uppercase mb-3 px-5" type="button" onClick={()=>clearCart(dispatch)}>clear cart</button>
                  </Link>
                  <h5>
                    <span className="text-title">subtotal : <strong>$ {cartSubTotal.toFixed(2)}</strong></span>
                  </h5>
                  <h5>
                    <span className="text-title">tax : <strong>$ {cartTax.toFixed(2)}</strong></span>
                  </h5>
                  <h5>
                    <span className="text-title">total : <strong>$ {cartTotal.toFixed(2)}</strong></span>
                  </h5>
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

export default CartTotal
