  "use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

export default function ProductCard(props: any) {
    const prod = props.product;
    const  [selectedProduct,setSelectedProduct] = useState({});

    const router = useRouter();
    // const navigateWithFilter = () =>{
    //     let searchparams = '?';
    //     if (price != null){
    //         searchparams = searchparams + '&price-from=10' = 10;
    //     }
    //     if (rating){
    //         searchparams = searchparams + '&rating=' + 4;
    //     }
    //     router.push('/products' + searchparams)
    // }


    const selectProd  = () => {
        console.log("Selecting prod:", prod);
        setSelectedProduct(prod);
    };

    return (
        <div>
            <button className='btn btn-primary' onClick={()=> router.push(`/products/${prod.id}`)}>Details</button>
            <button  className ='btn btn-secondary'onClick={()=>{
                router.push('/products?title=' + prod.title)
            }}> Same page Navigation sample</button>
        <Link href={'/products/'+prod.id}>
        <div onClick={selectProd}>
            <img src={prod.image} width={50} alt={prod.title}/>
            {prod.title}
        </div>
        </Link>
        </div>
    );
}