import React from 'react'
import Product from './Product'

export default function ProductList({AllProducts,incrementQty}) {
console.log(AllProducts[0]);
console.log(incrementQty);
    //console.log(AllProducts[0].name)
  return (
    Array.from(AllProducts).map((product,i)=>{
        return <Product One_product={product} key={i} index={i} incrementQty={incrementQty.incrementQty} ></Product>
    })
    )
}