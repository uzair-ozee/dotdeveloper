import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineTwitter, AiFillYoutube, AiFillFacebook, AiOutlineBars,} from 'react-icons/ai'
import "./header.css"



const Header = () => {
    const toggle = () => {
        setIstoggle(!Istoggle)
    }
    const [Istoggle, setIstoggle] = useState(false)
    const [fixNav, setFixNav] = useState('')
    const ScrollOn = () => {
        const isheight = 568;
        const winHeigh = document.body.scrollTop || document.documentElement.scrollTop;
        if (isheight < winHeigh) {
            setFixNav('fixIt')
        }
        else {
            setFixNav('')
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", ScrollOn)
    })
    return (

        <div className='bg__img'>
            <div className={`main_header_div ${fixNav}`}>

                <div className="header__logo"><img src="/images/blacklogo.png" alt="" /></div>

                <div className="header__links">
                    <li><Link>Home</Link></li>
                    <li><Link>About</Link></li>
                    <li><Link>Blog</Link></li>
                    <li><Link>Contact us</Link></li>
                </div>


                <div className="header__icons">
                    <li><Link><AiOutlineTwitter  size={30} className='gradient__icons'/></Link></li>
                    <li><Link><AiFillYoutube size={30} className='gradient__icons'/></Link></li>
                    <li><Link><AiFillFacebook size={30} className='gradient__icons'/></Link></li>
                </div>

            </div>

            <div className="navbar__toggle">
                <div className="logo"><img src="/images/blacklogo.png" alt="" srcset="" /></div>
                <div className="toggle__icon">
                    <AiOutlineBars size={30} onClick={toggle} />
                </div>
            </div>


            {Istoggle && (
                <div className="toggle__links">
                    <li><Link>Home</Link></li>
                    <div className="hr"></div>
                    <li><Link>About</Link></li>
                    <div className="hr"></div>
                    <li><Link>Blog</Link></li>
                    <div className="hr"></div>
                    <li><Link>Contact Us</Link></li>
                    <div className="hr"></div>
                </div>
            )}
</div>
    )}

    export default Header