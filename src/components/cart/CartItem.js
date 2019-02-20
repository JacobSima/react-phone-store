import React, { Component } from 'react'
import {Consumer} from '../../Context'
import {increment,decrement,removeItem} from '../../actions/Actions'

 class CartItem extends Component {
  render() {
    return (
      <Consumer>
        {value=>{
          const {id,title,img,total,count,price}=this.props.item
          const{dispatch} =value
          return(
           <div className="row my-1 text-capitalize text-center">
              <div className="col-10 mx-auto col-lg-2">
                <img src={img} style={{width:'5rem',heigh:"5rem"}} className="img-fluid" alt="product"/>
              </div> 
              <div className="col-10 mx-auto col-lg-2">
              <span className="d-lg-none">product: </span>{title}
              </div>
              <div className="col-10 mx-auto col-lg-2">
              <span className="d-lg-none">price: </span>{price}
              </div>

              <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
               <div className="d-flex justify-content-center">
                 <div className="">
                   <span className="btn btn-black mx-1" onClick={()=>decrement(id,dispatch,count) }>-</span>
                   <span className="btn btn-black mx-1">{count}</span>

                   <span className="btn btn-black mx-1" onClick={()=>increment(id,dispatch)}>+</span>
                 </div>
               </div>
              </div>
             
              <div className="col-10 mx-auto col-lg-2">
              <strong>item total: ${total}</strong>
              </div>

              <div className="col-10 mx-auto col-lg-2">
              <div className="cart-icon">
               <i className="fas fa-trash" onClick={()=>removeItem(id,dispatch)}></i>
              </div>
              </div>


             

           </div>
          )
        }}
      </Consumer>
    )
  }
}
export default CartItem

