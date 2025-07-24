"use client"

import Link from "next/link";
import AboutCustomButton from "./as-work-button";

export default function AboutServices() {

    return(
        <section id="about-services">
            <div className="as__top-bg">
                <div className="as__header">
                    <h1>Creative Tech Services</h1>
                </div>
                <div className="as__button-container">
                    <AboutCustomButton
                        number="01"
                        title="AR filters"
                        link="#"
                    />
                    <AboutCustomButton
                        number="02"
                        title="3D Production"
                        link="#"
                    />
                    <AboutCustomButton
                        number="03"
                        title="Digital Collections"
                        link="#"
                    />
                    <AboutCustomButton
                        number="04"
                        title="VR Services"
                        link="#"
                    />
                </div>
                {/* <ul>
                    <li>AR filters</li>
                    <li>3D Production</li>
                    <li>Digittal Collections</li>
                    <li>VR Services</li>
                </ul> */}
            </div>
        </section>
    );
}