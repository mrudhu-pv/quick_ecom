import React from 'react'


export default function  productsLayout({ children}:{ children: React.ReactNode}) {
  return (
    <div>
        <h3>This is the products  Section </h3>
       
        {children}
    </div>
  )
}
