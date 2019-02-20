import {storeProducts} from './data'
import React, { Component } from 'react'
import {GET_PRODUCT,ADD_TO_CART,OPEN_MODAL,CLOSE_MODAL,ADD_TOTAL,CLEAR_CART,REMOVE_ITEM,INCREMENT,DESCREMENT } from './actions/Action-types'

 const Context = React.createContext()

// reducer
const reducer =(state,action)=>{
  switch(action.type){

    case GET_PRODUCT:
    return {
      ...state,
      product:state.products.find(product=> product.id === action.payload),
      loading:false,
      
    }

    case ADD_TO_CART:
    state.product.inCart=action.payload
    state.product.count = 1
    const price = state.product.price
    state.product.total=price
    return {
      ...state,
      product:state.product,
      cart:[...state.cart,state.product]
    }
    
    case OPEN_MODAL:
    return{
      ...state,
      modalOpen:true
    }

    case CLOSE_MODAL:
    return{
      ...state,
      modalOpen:false
    }

    case ADD_TOTAL:
    let subTotal=0
    state.cart.map(item=>(subTotal += item.total))
    const tempTax =subTotal*0.1
    const tax = parseFloat(tempTax.toFixed(2))
    const total = subTotal+tax
    return{
      cartSubTotal:subTotal,
      cartTax:tax,
      cartTotal:total
    }

    case CLEAR_CART:
    state.products.map(item=>(item.inCart=false))
    return {
        ...state,
       cart:[],
       cartSubTotal:0,
       cartTax:0,
       cartTotal:0,

    }
    case REMOVE_ITEM :
    const cartItem = state.cart.find(item=> item.id === action.payload)
    cartItem.inCart =false
    const subTota =cartItem.total 
    const tempTa =subTota*0.1
    const ta = parseFloat(tempTa.toFixed(2))
    const tota = subTota+ta
    return{
     ...state,
     cartSubTotal: state.cartSubTotal-subTota,
     cartTax:state.cartTax-ta,
     cartTotal:state.cartTotal-tota,
     cart:state.cart.filter(cart=>(cart.id !==action.payload)),
    }

    case INCREMENT:
    const cartInc = state.cart.find(item=> item.id === action.payload)
    cartInc.count += 1
    cartInc.total +=cartInc.price
    let cIn = state.cart.map(item=>{
      if(item.id === action.payload){
        item.total=cartInc.total
        return item
      }else {return item}
    })
    return{
     ...state,
     cart:cIn
    }

    case DESCREMENT:
    const cartDec = state.cart.find(item=> item.id === action.payload)
    if(cartDec.count ===0){
      return{
        ...state
       }
    }else{
    cartDec.count -= 1
    cartDec.total -=cartDec.price
    let dIn = state.cart.map(item=>{
      if(item.id === action.payload){
        item.total=cartDec.total
        return item
      }else {return item}
    })
       return{
     ...state,
     cart:dIn
    }
    }
    
  
   default:
   return state
  }
  
  }

//Provider
//Consumer
 
 class Provider extends Component {
   state={
     products:[],
     product:{},
     loading:true,
     dispatch:action =>this.setState(state=>reducer(state,action)),
     cart:[],
     modalOpen:false,
     cartSubTotal:0,
     cartTax:0,
     cartTotal:0
   }

    componentWillMount(){
    this.setProducts()
  }
  
   setProducts =()=>{
     let temProducts=[];
     storeProducts.forEach(item=>{
       const singleItem ={...item};
       temProducts=[...temProducts,singleItem]
     })
     this.setState({products:temProducts})
   }

  render() {
    return (
      <Context.Provider value={this.state}>
         {this.props.children}

      </Context.Provider>
    )
  }
}
const Consumer = Context.Consumer
export{Context,Provider,Consumer}


