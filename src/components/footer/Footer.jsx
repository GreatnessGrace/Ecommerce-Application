import React from "react";

function Footer(params) {
    return (
        <div>
            <div className="bg-grey-500 m-10">
            <div className="flex flex-row justify-around m-50">
            <div className="">
                    <h3>CATEGORIES</h3>
                    <ul>
                        <li>
                            Home
                        </li>
                        <li>
                            Order
                        </li>
                        <li>
                            Local For Vocal
                        </li>
                        <li>
                            Cart
                        </li>
                    </ul>
                </div>
                <div>
                    <h3>CUSTOMER SERVICE</h3>
                    <ul>
                        <li>Return Policy</li>
                        <li>About</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div>
                    <h3>SERVICES</h3>
                    <ul>
                        <li>Privacy</li>
                    </ul>
                </div>
                <div>
                    <img src="./src/assets/react.svg" alt="Payment" />
                </div>
            </div>
            </div>
            <div className="flex flex-row justify-around"> <b>E-Unstoppable</b>
            <p>2023 E-Unstoppable - www.eunstoppable.com</p>
            <ul className="flex flex-row"> 
                <li>f</li>
                <li>T</li>
                <li>I</li>
                <li>L</li>
                </ul>
                </div>
        </div>
    )
}

export default Footer;