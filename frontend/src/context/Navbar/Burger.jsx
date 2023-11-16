import './Burger.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, NavLink } from 'react-router-dom';
import { MdKeyboardArrowRight } from "react-icons/md"
import { AiFillCaretLeft } from "react-icons/ai";
import { CiMenuBurger } from "react-icons/ci";
import { IoExit } from "react-icons/io5";


// Import statements...

const Burger = () => {
    return (
        <section id='menu'>
            <article>
                <div className="menu">
                    <div className='divTuggleOb'>
                        <input id="menu--toggle" type="checkbox" />
                        <label className="menu--toggle__trigger" htmlFor="menu--toggle"><button className='Open'><CiMenuBurger /></button></label>
                        <label className='menu--toggle__burger' htmlFor="menu--toggle"></label>
                        <ul className="menu__body">
                            <li className="menu__body-element">
                                    <div id="wrapper">
                                        <p><a className="button" href={`#popup1`}><MdKeyboardArrowRight size={'24px'} /></a></p>
                                    </div>
                                    <div id={`popup1`} className="overlay">
                                        <a className="close" href="#*"><AiFillCaretLeft /></a>
                                        <div className="content">
                                            <h1>HELLO</h1>
                                        </div>
                                        <div className='MapBox'>
                                            <Link to="/hello"><h4>Hello</h4></Link>
                                        </div>
                                    </div>
                            </li>
                        </ul>
                        <div id='logoUkm' className='logoUkm'>
                            <div className='GlavBtw'>
                                {/* ... */}
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    );
}

export default Burger;
