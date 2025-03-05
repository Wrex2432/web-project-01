"use client"

import Link from "next/link";
import { useState } from "react";
export default function AboutCustomButton({number, title, link}) {
    const [isActive, setIsActive] = useState('inactive')
    return (
        <button id={number} onClick={()=> {
            isActive === 'inactive' ? 
            setIsActive('active') :
            setIsActive('inactive') 
        }} className="as__button-wrapper">
            <div className="as__button-item">
                <p>
                    <span className="as__button-item--num">{number}</span>
                    {title}
                </p>
                <Link className="as__button-item--view" href={link}>→ View Catalog</Link>
            </div>

            <div className={"as__button-data " + isActive}>
                <img src="/about/about_tempBanner.png" alt="" />
            </div>


        </button>
    );
}