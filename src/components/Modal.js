import React, { Component } from 'react'
import { Context,Consumer} from '../Context';
import styled from 'styled-components'
import {ButtonContainer} from './Button'
import {Link} from 'react-router-dom'
import {closedModal} from '../actions/Actions'

 class Modal extends Component {
  modalClosed=dispatch=>{
    closedModal(dispatch)
  }
  render() {
    return ( 
      <Consumer>
        {value=>{
          let modalContent;
          const {modalOpen,dispatch} =value
          const {img,title,price} =value.product
          if(!modalOpen){
            modalContent = null
          }else{
            modalContent=<ModalContainer>
              <div className="container">
              <div className="row">
               <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize">
                <h5>Item added to the cart</h5>
                <img scr ={img} className="img-fluid" alt="product" />
                <h5>{title}</h5>
                <h5 className="text-muted">price: ${price}</h5>
                <Link to="/">
                  <ButtonContainer onClick={this.modalClosed.bind(this,dispatch)} >
                    store
                  </ButtonContainer>
                </Link>
                <Link to="/cart">
                  <ButtonContainer cart onClick={this.modalClosed.bind(this,dispatch)} >
                    go to cart
                  </ButtonContainer>
                </Link>
               </div>
              </div>
            </div>
         </ModalContainer>      
          }
          return(
            <React.Fragment>
               {modalContent}
            </React.Fragment> 
          )
        }}
      </Consumer>
    )
  }
}

Modal.contextType =Context

export default Modal 

const ModalContainer =styled.div`
 position:fixed;
 top:0;
 left:0;
 right:0;
 bottom:0;
 background:rgba(0,0,0,0.3);
 display:flex;
 align-items:center;
 justify-content:center;
 #modal{
   background:var(--mainWhite)
 }
`
