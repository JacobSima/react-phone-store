import React from 'react'

 const CartColums =  ()=>{
  return (
    <div className="container-fluid text-center d-none d-lg-block mt-2">
       <div className="row">
        <div className="col-10 mx-auto col-lg-2">
         <p className="text-uppercase">Products</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
         <p className="text-uppercase">name of products</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
         <p className="text-uppercase">Price</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
         <p className="text-uppercase">quantity</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
         <p className="text-uppercase">total</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
         <p className="text-uppercase">remove</p>
        </div>
       </div>
    </div>
  )
}

export default CartColums