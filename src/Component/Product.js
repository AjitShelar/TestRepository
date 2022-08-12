import React from 'react'
import ProductList from './ProductList'
 
export default function Product({One_product,incrementQty}) {
    
  return (
    <div className="row">
      <div className="col-6">
        <h2>{One_product.name}
        <span className="badge bg-secondary">₹{One_product.price}</span></h2>
        {/* <span class="badge bg-secondary">Qty.{One_product.One_product.quantity}</span> */}
      </div>
      
    <div className='col-4'>
      <div className="btn-group" role="group" aria-label="Basic mixed styles example"> 
        <button type="button" className="btn btn-danger"> - </button>
        <button type="button" className="btn btn-warning"> {One_product.quantity} </button>
        <button type="button" className="btn btn-success" onClick={()=>{incrementQty.incrementQty(One_product.index)}}> + </button>
      </div>
      </div>
      <div className='col-2'>{One_product.quantity*One_product.price}</div>
    </div>
  );
}
