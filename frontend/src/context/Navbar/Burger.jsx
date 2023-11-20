import './Burger.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, NavLink } from 'react-router-dom';
import { CiMenuBurger } from "react-icons/ci";


// Import statements...

const Burger = () => {
    return (
        <div className="Burger">
            <div className="BurgerNavbar">
                <div className="wrapper">
                    <nav>
                        <input type="checkbox" id="menu" name="menu" className="m-menu__checkbox" />
                        <div className="NavButton">
                            <label className="m-menu__toggle" for="menu">
                                <CiMenuBurger />
                            </label>
                            <div className="imgRanch">
                                
                            </div>
                        </div>
                        <label className="m-menu__overlay" for="menu"></label>

                        <div className="m-menu">
                            <div className="m-menu__header">
                                <label className="m-menu__toggle" for="menu">
                                    <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="butt" stroke-linejoin="arcs">
                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                    </svg>
                                </label>
                                <span>MENU</span>
                            </div>
                            <ul>
                                <li><label>Item 1</label></li>
                                <li>
                                    <label className="a-label__chevron" for="item-2">Item 2</label>
                                    <input type="checkbox" id="item-2" name="item-2" className="m-menu__checkbox" />
                                    <div className="m-menu">
                                        <div className="m-menu__header">
                                            <label className="m-menu__toggle" for="item-2">
                                                <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="butt" stroke-linejoin="arcs">
                                                    <path d="M19 12H6M12 5l-7 7 7 7" />
                                                </svg>
                                            </label>
                                            <span>Item 2</span>
                                        </div>
                                        <ul>
                                            <li><label>Item 2.1</label></li>
                                            <li><label>Item 2.2</label></li>
                                            <li>
                                                <label className="a-label__chevron" for="item-2-3">Item 2.3</label>
                                                <input type="checkbox" id="item-2-3" name="item-2" className="m-menu__checkbox" />
                                                <div className="m-menu">
                                                    <div className="m-menu__header">
                                                        <label className="m-menu__toggle" for="item-2-3">
                                                            <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="butt" stroke-linejoin="arcs">
                                                                <path d="M19 12H6M12 5l-7 7 7 7" />
                                                            </svg>
                                                        </label>
                                                        <span>Item 2.3 </span>
                                                    </div>
                                                    <ul>
                                                        <li><label>Item 2.3.1</label></li>
                                                        <li><label>Item 2.3.2</label></li>
                                                        <li><label>Item 2.3.3</label></li>
                                                        <li><label>Item 2.3.4</label></li>
                                                        <li><label>Item 2.3.5</label></li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                        <li><label>Item 2.4</label></li>
                                        <li><label>Item 2.5</label></li>
                                        <li><label>Item 2.6</label></li>
                                        <li><label>Item 2.7</label></li>
                                        <li><label>Item 2.8</label></li>
                                        <li><label>Item 2.9</label></li>
                                    </div>
                                </li>
                                <li><label>Item 3</label></li>
                                <li><label>Item 4</label></li>
                                <li><label>Item 5</label></li>
                                <li><label>Item 6</label></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Burger;
