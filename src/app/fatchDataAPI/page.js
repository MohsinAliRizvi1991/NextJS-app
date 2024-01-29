"use client";
import { useEffect, useState } from "react";

export default function APIdata() {
  const [product, setProduct] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      fetch("https://dummyjson.com/products")
        .then(response => response.json())
        .then(data => {
          console.log(data);
          setProduct(data.products);
        })
      
    };

    fetchData();

  }, []); 

  return (
    <div>
      <h1>Product List</h1>
      {product.map((item) => (
        <h3>Name : {item.title},${<br/>} price :{item.price}</h3>
      ))}
    </div>
  );
}
