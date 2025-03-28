import React, { Suspense } from 'react'

// export default function Products() {
//   return (
//     <div className='text-red-600'> This is Products Page</div>
//   )
// }
import ProductCard from "../components/product-card/ProductCard";
import { ProductService } from "../services/producta-services"
import { title } from 'process';
import GoToCartButton from '../components/GoToCartButton';
import { Metadata } from 'next';
import ProductList from '../components/ProductList';


// async function getProducts() {

//   const ProductResp = await ProductService.getProducts();
//   return ProductResp;

// }

export const metadata:Metadata ={
  title:"product List Page"
}



export default function Products() {
  console.log("Products page  excecuted");

  // const products = await getProducts();
  return (
    <div>
      <GoToCartButton/>
      <h3>Product List</h3>
      <Suspense fallback={<span style={{color:"red"}}>Loading</span>}>
      <ProductList/>
      </Suspense>
    </div>
  );
}