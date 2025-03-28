import { ProductService } from '@/app/services/producta-services';
import React from 'react'

export async function generateMetadata(props: any) {
  console.log("generateMetadata:",props);

  const productId= props.params.productId;
  var product;
  if(productId){
    product=await ProductService.getProductById(productId);
  
return{
  title:product.title
}
}
return{
title:"Prod detail page"
}
}
export default async function ProductDetail(props:any){
  console.log(props);
  const productId=props.params.productId;
  var product;
  if (productId){
      product=await ProductService.getProductById(productId);
  }
  return(
      <div>
         <h3>
          {product.title}
         </h3>
      </div>
  )
}

