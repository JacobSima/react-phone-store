import React, { Component } from 'react'
import CartItem from './CartItem'

class CartList extends Component {
  render() {
    const {value}=this.props
    const {cart}=value
    return (
      <div className="container-fluid">
      {cart.map(item=><CartItem key={item.id} item={item}/>)}
      </div>
    )
  }
}
export default  CartList 

