import './Navbar.css';
import phone from './../../pages/assets/IMG/Vector.png';
import email from './../../pages/assets/IMG/Component.png';
import logo from './../../pages/assets/IMG/Ranch.png';
import { AiOutlineSearch } from 'react-icons/ai';
import imgUZ from '../../pages/assets/IMG/Flags.png';


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
                    <section>
                        
                    </section>
                </div>
            </div>
            <div className="NavDown">

                </div>
            </div>
    )
}