"use client"
import Link from 'next/link';
import React from 'react'
const Clientlayout = ({ children }) => {
    return (
			<div>
                <header>
                    <Link href={"pages/setting"}>Detail</Link>
                </header>
				<div>{children}</div>
                <footer>Footer</footer>
    	    </div>
    )
}
export default Clientlayout;