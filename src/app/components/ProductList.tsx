import React from 'react'
import { ProductService } from '../services/producta-services'
import ProductCard from './product-card/ProductCard';

export default async function productList() {


    const products = await ProductService.getProducts();
  return (
    <div>
        {products.map((product: any) =>{
            return <ProductCard key={product.id} product={product}/>
        } )}
       
    </div>
  )
}
