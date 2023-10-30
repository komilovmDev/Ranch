import './Navbar.css';
import phone from './../../pages/Home/HomeAssets/IMG/Vector.png';
import email from './../../pages/Home/HomeAssets/IMG/Component.png';
import logo from './../../pages/Home/HomeAssets/IMG/Ranch.png';
import { AiOutlineSearch } from 'react-icons/ai';
import { AiOutlineCheck } from 'react-icons/ai';
import { useEffect } from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';


export default function Navbar() {
    //Navbar Fixed
    const [navClass, setNavClass] = useState('Navbar__Container');

    function FixedNav() {
        const scrollY = window.scrollY; // Scroll y positionni hozir funksiya ichida olishimiz kerak
        if (scrollY > 200) {
            setNavClass('Navbar__Container fixed');
        } else {
            setNavClass('Navbar__Container'); // Scroll 200 dan kam bo'lsa fixed klassini olib tashlash
        }
    }


    useEffect(() => {
        window.addEventListener('scroll', FixedNav); // scroll hodisasini eshitamiz
        return () => {
            window.removeEventListener('scroll', FixedNav); // komponent ochirilganda eshitamizni to'xtatamiz
        };
    }, []);


    return (
        <div className={navClass} id='Navbar' >
            <div className="NavContainer">
                <div className="NavUp">
                    <div className="LogBut">
                        <img src={logo} alt="png" />
                        <button> Murojat uchun </button>
                    </div>
                    <div className="LabInp">
                        <label htmlFor=""><input type="search" placeholder='Qidirish' /> <button type='submit'><AiOutlineSearch /></button></label>
                    </div>
                    <div className='TelEmail'>
                        <div className="Tel">
                            <img src={phone} alt="" />
                            <a href='tel:+998622277772'>62 227 77 72</a>
                        </div>
                        <div className="Email">
                            <img src={email} alt="" />
                            <a href='mailto:university@utu-ranch.uz'>university@utu-ranch.uz</a>
                        </div>
                    </div>
                    <div className="ButLang">
                        <button>
                            Kirish
                        </button>
                        <select name="lang" id="lang">
                            <option value="en"><button>UZ</button></option>
                            <option value="en"><button>RU</button></option>
                            <option value="en"><button>EN</button></option>
                        </select>
                    </div>
                </div>
                <div className="NavDown">
                    <div className="dropdown">
                        <Link to={'/News'}><button className="dropbtn">Yangiliklar</button></Link>
                    </div>
                    <div className="dropdown">
                        <button className="dropbtn">Universitet</button>
                        <div className="dropdown-content" >
                            <Link to={'/University/Markaz'}><div className='LinkBox'><p>Markaz va bo'limlar</p> <button className='ButtonChek'><AiOutlineCheck /></button></div></Link>
                            <Link to={'/University/Kafedra'}><div className='LinkBox'><p>Kafedralar</p> <button className='ButtonChek'><AiOutlineCheck /></button></div></Link>
                            <Link><div className='LinkBox'><p>Rektorat</p> <button className='ButtonChek'><AiOutlineCheck /></button></div></Link>
                            <Link to={'/University/IchqiTartib'}><div className='LinkBox'><p>Universitet Ichki tartib qoidalari</p> <button className='ButtonChek'><AiOutlineCheck /></button></div></Link>
                            <Link to={'/University/Odob'}><div className='LinkBox'><p>Universitet Odob-axloq kodeksi</p> <button className='ButtonChek'><AiOutlineCheck /></button></div></Link>
                            <Link to={'/University/Nizom'}><div className='LinkBox'><p>Universitet nizomi</p> <button className='ButtonChek'><AiOutlineCheck /></button></div></Link>
                            <Link to={'/University/Universitet_haqida'}><div className='LinkBox'><p>Universtitet haqida</p> <button className='ButtonChek'><AiOutlineCheck /></button></div></Link>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="dropbtn">Faoliyat</button>
                        <div className="dropdown-content">
                            <Link to={'/Faoliyat/Hamkor'}><div className='LinkBox'><p>Xalqaro hamkor tashkilotlar</p> <button className='ButtonChek'><AiOutlineCheck /></button></div></Link>
                            <Link><div className='LinkBox'><p>Yoshlar bilan ishlash va
                                ma'naviy-ma'rifiy faoliyat</p> <button className='ButtonChek'><AiOutlineCheck /></button></div></Link>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="dropbtn">Abiturent</button>
                        <div className="dropdown-content">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="dropbtn">Talabalar</button>
                        <div className="dropdown-content">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="dropbtn">Magistratura</button>
                        <div className="dropdown-content">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="dropbtn">Ta’lim resurslari</button>
                        <div className="dropdown-content">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="dropbtn">Galereya</button>
                        <div className="dropdown-content">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="dropbtn">Bizning Imkoniyatlarimiz</button>
                        <div className="dropdown-content">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}