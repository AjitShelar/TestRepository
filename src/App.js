 import logo from './logo.svg';
import "./App.css";
//import React from "react";
import Navbar from "./Component/Navbar";
import ProductList from "./Component/ProductList";
import React,{useState} from 'react';

function App() {
  const ProductsList=[{
    name:"Men's Shirt",
    price:9999,
    quantity:0
  },
  {
    name:"Shoes",
    price:20058,
    quantity:0
  }
];

const [productsList,setProductList]=useState(ProductsList)

const incrementQty=(index)=>{
  let newProductList = [...productsList]
  newProductList[index].quantity++;
  setProductList(newProductList)
}
  return (
    <React.Fragment>      
      <Navbar></Navbar>
      <main className='container mt-5'>
      <ProductList AllProducts={ProductsList} incrementQty={incrementQty} ></ProductList>
      {/* <Footer></Footer> */}
      </main>
    </React.Fragment>
  );
}

export default App;
