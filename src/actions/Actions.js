import {GET_PRODUCT,ADD_TO_CART,OPEN_MODAL, CLOSE_MODAL,ADD_TOTAL,CLEAR_CART,REMOVE_ITEM, INCREMENT, DESCREMENT } from './Action-types'

export const getSingleProduct =(id,dispatch)=>{
  dispatch({
    type:GET_PRODUCT,
    payload:id
  })
}

export const addProductToCart =dispatch=>{
  dispatch({
    type:ADD_TO_CART,
    payload:true
  })

  addTotal(dispatch)
}

export const openModal = (id,dispatch)=>{
   dispatch({
     type:OPEN_MODAL,
     payload:id
   })
}

export const closedModal =(dispatch)=>{
    dispatch({
      type:CLOSE_MODAL
    })
}

export const increment =(id,dispatch)=>{
  dispatch({
    type:INCREMENT,
    payload:id
  })
  addTotal(dispatch)
}

export const decrement =(id,dispatch,count)=>{
  dispatch({
    type:DESCREMENT,
    payload:id
  })
  addTotal(dispatch)
  if(count === 1){
    removeItem(id,dispatch)
  }
}

export const removeItem =(id,dispatch)=>{
  dispatch({
    type:REMOVE_ITEM,
    payload:id 
  })

}

export const clearCart =(dispatch)=>{
  dispatch({
    type:CLEAR_CART
  })
}

const addTotal =(dispatch)=>{
  dispatch({
    type:ADD_TOTAL
  })
}