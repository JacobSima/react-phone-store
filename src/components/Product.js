import React, { Component } from 'react'
import {Consumer, Context} from '../Context'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import {getSingleProduct,addProductToCart,openModal} from '../actions/Actions'

class Product extends Component {
  cartClicked =async (id,dispatch)=>{
     await getSingleProduct(id,dispatch)
     await addProductToCart(dispatch)
           openModal(id,dispatch) 
  }
  
  productClicked =(id,dispatch)=>{
     getSingleProduct(id,dispatch)
  }

 
    
    
  

  render() {
    return(
       <Consumer>
         {value=>{
           const {id,title,img,price,inCart}=this.props.product
           const {dispatch} = value
           return(
             <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
          <div className="img-container p-5">
                     <Link to={'/details'}>
                      <img src={img} alt="product" className="card-img-top" 
                      onClick={this.productClicked.bind(this,id,dispatch)}
                      />
                     </Link>
                     <button className="cart-btn" disabled={inCart?true:false} onClick={this.cartClicked.bind(this,id,dispatch)}>
                      {inCart?(<p className="text-capitalize mb-0" disabled>{" "}in cart</p>):(
                        <i className="fas fa-cart-plus"></i>
                      )}
                     </button>
                   </div>
                   {/* card footer */}
                   <div className="card-footer d-flex justify-content-between">
                     <p className="align-self-center mb-0">
                        {title}
                     </p>
                     <h5 className="text-blue font-italic mb-0">
                       <span className="mr-1">$</span>{price}
                     </h5>
                   </div>
                </div> 
             </ProductWrapper>
           )
         }}
       </Consumer>
    )
}
}

Product.contextType =Context

export default  Product

Product.propTypes ={
  product:PropTypes.shape({
    id:PropTypes.string,
    img:PropTypes.string,
    title:PropTypes.string,
    price:PropTypes.number,
    inCart:PropTypes.bool
  }).isRequired
}

const ProductWrapper =styled.div`
 
  .card{
    border-color:transparent;
    transition:all 1.5s linear;
  }
  .card-footer{
     background:transparent;
     border-top:transparent;
     transition:all 1.5s linear;
  }

  &:hover{
     .card{ 
       border:0.04rem solid rgba(0,0,0,0.2);
       box-shadow:2px 2px 5px 0px rgba(0,0,0,0.2)
     }
     .card-footer{
       background:rbga(247,247,247)
     }
    }
  .img-container{
       position:relative;
       overflow:hidden;
    }
   
    .card-img-top{
      transition:all 1.5s linear;
    }

  .img-container:hover .card-img-top{
    transform:scale(1.2)
     } 
    .cart-btn{
      position:absolute;
      bottom:0;
      right:0
      padding:0.2rem 0.4rem;
      background:var(--lightBlue);
      border:none;
      color:var(--mainWhite);
      font-size:1.4rem;
      border-radius:0.5rem 0 0 0;
      transform:translate(100%,100%);
      transition:all 0.8s linear;
    }
    .img-container:hover .cart-btn{
      transform:translate(0,0)
    }
    .cart-btn:hover{
      color:var(--mainBlue);
      cursor:pointer;
    }
`