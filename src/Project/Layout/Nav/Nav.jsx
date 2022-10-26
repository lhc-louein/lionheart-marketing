import React, {useState, useRef} from "react";
function Nav() {

    const [nav, setNav] = useState(false);
    const navEl = useRef();

    const trigger = () => {
        nav?setNav(false):setNav(true);
    }

    return ( 
        <nav ref={navEl} className={!nav?'nav':'nav show-nav'}>
            <div className="nav-wrapper">
                <div className="nav-trigger layout-sp" onClick={trigger}>
                    <div className="wrapper">
                        <div className="nav-trigger__line"></div>
                        <div className="nav-trigger__line"></div>
                        <div className="nav-trigger__line"></div>
                    </div>
                </div>
                <ul className="nav-menu d-lg-flex align-items-lg-center justify-content-lg-center">
                    <li className="nav-menu__item">
                        <a href="/about/" className="nav-menu__item__anchor">ABOUT LOL</a>
                    </li>
                    <li className="nav-menu__item">
                        <a href="/products/" className="nav-menu__item__anchor">PRODUCTS</a>
                    </li>
                    <li className="nav-menu__item">
                        <a href="/services/" className="nav-menu__item__anchor">SERVICES</a>
                    </li>
                    <li className="nav-menu__item">
                        <a href="/contact/" className="nav-menu__item__anchor">CONTACT</a>
                    </li>
                </ul>
            </div>
        </nav>
     );
}

export default Nav;