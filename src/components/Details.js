import React, { Component } from 'react'
import {Consumer,Context } from '../Context'
import {Link} from 'react-router-dom'
import { ButtonContainer } from './Button'
import {addProductToCart,openModal} from '../actions/Actions'

class Details extends Component {
 
  componentDidMount(){
    if(this.context.loading){
      this.props.history.push('/')
    }
  }

  productClicked = async (id,dispatch)=>{
    await addProductToCart(dispatch)
    await openModal(id,dispatch)
  }

  render() {
    return (
      <Consumer>
        {value=>{
        let detailContent;
        if(Object.keys(value.product).length === 0){
          detailContent =<h1>Loading</h1>
        }
        else{
          const{id,title,img,company,price,info,inCart}=value.product
          const{dispatch}=value
          detailContent =(
            <div className="container py-5">
               {/* title */}
               <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                 <h1>{title}</h1>
                </div>
               </div>
               {/* title */}
               {/* product info */}
               <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                   <img src={img} alt="product" className="img-fluid" />
                </div>
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h2>model:{title}</h2> 
                  <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                    made by : <span className="text-uppercase">{company}</span>
                  </h4>
                  <h4 className="text-blue">
                   <strong>
                     price: <span>$</span>{price}
                   </strong>
                  </h4>
                  <p className="text-capitalize font-weight-bold mt-3mb-0">
                  some info about the product :
                  </p>
                  <p className="text-muted lead">
                   {info}
                  </p>
                  {/* buttons */}
                  <div >
                  <Link to="/">
                  <ButtonContainer>
                    back to product
                  </ButtonContainer>
                  </Link>
                  <ButtonContainer 
                      cart
                      disabled={inCart?true:false}
                      onClick={this.productClicked.bind(this,id,dispatch)}
                    >
                    {inCart?'inCart':'add to cart'}
                  </ButtonContainer>
                  </div>
                </div>
               </div>

               {/* product info */}
            </div>
          )
          
        }
          return (
            <React.Fragment>
              {detailContent}
            </React.Fragment>)
        }}
      </Consumer>
    )
  }
}

Details.contextType= Context
export default Details

