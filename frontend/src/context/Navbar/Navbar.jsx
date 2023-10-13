import './Navbar.css';
import phone from './../../pages/assets/IMG/Vector.png';
import email from './../../pages/assets/IMG/Component.png';
import logo from './../../pages/assets/IMG/Ranch.png';
import { AiOutlineSearch } from 'react-icons/ai';
import imgUZ from './../../pages/assets/IMG/Flags.png';


export default function Navbar() {
    return (
        <div className='Navbar'>
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
                    <select name="" id="">
                        <option value="en"><button>UZ</button></option>
                        <option value="en"><button>RU</button></option>
                        <option value="en"><button>EN</button></option>
                    </select>
                </div>
            </div>
            <div className="NavDown">
                <div className="dropdown">
                    <button className="dropbtn">Yangiliklar</button>
                </div>
                <div className="dropdown">
                    <button className="dropbtn">Universitet</button>
                    <div className="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="dropbtn">Faoliyat</button>
                    <div className="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
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
    )
}