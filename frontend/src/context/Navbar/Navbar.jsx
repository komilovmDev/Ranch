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
                        <p>62 227 77 72</p>
                    </div>
                    <div className="Email">
                        <img src={email} alt="" />
                        <p>university@utu-ranch.uz</p>
                    </div>
                </div>
                <div className="ButLang">
                    <button>
                        Kirish
                    </button>
                    <select>
                        <option value="option1">UZ  </option>
                        <option value="option2" data-img-src={imgUZ}>Option 2</option>
                        <option value="option3" data-img-src="/path/to/image3.jpg">Option 3</option>
                    </select>
                </div>
            </div>
            <div className="NavDown">
                {/* <button className="DefaultLeng">
                    <h5>UZ</h5> <img src={imgUZ} alt="" />
                </button>
                <div className='lengs'>
                    <button className="DefaultLeng">
                        <h5>UZ</h5> <img src={imgUZ} alt="" />
                    </button>
                    <button className="DefaultLeng">
                        <h5>RU</h5> <img src={imgUZ} alt="" />
                    </button>
                    <button className="DefaultLeng">
                        <h5>EN</h5> <img src={imgUZ} alt="" />
                    </button>
                </div> */}
            </div>
        </div>
    )
}