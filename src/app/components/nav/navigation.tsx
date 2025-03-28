import React from 'react'
import Link from 'next/link'

function navigation() {
    return (
        <div>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <Link className="nav-link" href="/">Home</Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" href="/products">Products</Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" href="/about-us">About Us</Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" href="/contact">Contact Us</Link>
                </li>
            </ul>


        </div>
    )
}

export default navigation