import './Navbar.css';
import logo from './../IMG/Ranch.png'
import { AiOutlineSearch } from 'react-icons/ai'

export default function Navbar() {
    return (
        <div className='Navbar'>
            <div className="NavUp">
                <div className="LogBut">
                    <img src={logo} alt="png" />
                    <button> Murojat uchun </button>
                </div>
                <div className="LabInp">
                    <label htmlFor=""><input type="search" /> <button type='submit'><AiOutlineSearch /> </button></label>
                </div>
                <div className='TelEmail'>
                    <div className="Tel">
                        <img src="" alt="" />
                        <p>62 227 77 72</p>
                    </div>
                    <div className="Email">
                        <img src="" alt="" />
                        <p>university@utu-ranch.uz</p>
                    </div>
                </div>
                <div className="ButLang">
                    <button>
                        Kirish
                    </button>
                </div>
            </div>
            <div className="NavDown">

            </div>
        </div>
    )
}