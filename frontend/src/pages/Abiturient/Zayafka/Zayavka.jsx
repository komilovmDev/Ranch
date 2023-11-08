import './Zayavka.css';
import { Link } from 'react-router-dom';
import { RiBankLine } from 'react-icons/ri';
import { AiOutlineRight } from 'react-icons/ai';
import Dropdown from '../../../context/Dropdwn/Dropdwn';
import BasicTable from '../../../context/Table/BasicTable';


export default function Zayavka() {
    return (
        <div className="Zayavka">
            <div className="ZayavkaContainer">
                <div className="NewsTitleLine">
                    <Link className='NewsTitleLineIcon' to={'/'}><RiBankLine /></Link>
                    <AiOutlineRight className='Iconright' />
                    <Link className='NewsTitleLineText' to={'/'}>University</Link>
                    <AiOutlineRight className='Iconright' />
                    <p>Kunduzgi ta’lim yo’nalishlari</p>
                </div>
                <div className="ZayavkaСontant">
                    <div className="ZayavkaOne">
                        <div className="ZayavkaOneContainer">
                            <div className="ZOCName">
                                <form>
                                    <label htmlFor="name">Familiya</label>
                                    <input type="name" minLength="4" maxLength="20" size="10" />
                                </form>
                                <form>
                                    <label htmlFor="name">Ismi</label>
                                    <input type="name" minLength="4" maxLength="20" size="10" />
                                </form>
                                <form>
                                    <label htmlFor="name">Sharifi</label>
                                    <input type="name" minLength="4" maxLength="20" size="10" />
                                </form>
                            </div>
                            <div className="ZOCPhone">
                                <form>
                                    <label htmlFor="tel">Telefon</label>
                                    <input type="tel" placeholder='+998999999999' minLength="4" maxLength="11" size="10" />
                                </form>
                                <form>
                                    <label htmlFor="email">Email</label>
                                    <input type="email" minLength="7" size="100" />
                                </form>
                            </div>
                            <div className="ZOCDok">
                                <form>
                                    <label htmlFor="text">Pasport seriya</label>
                                    <input type="text" minLength="2" maxLength="2" size="10" />
                                </form>
                                <form>
                                    <label htmlFor="number">Pasport raqami</label>
                                    <input type="number" minLength="4" maxLength="7" size="10" />
                                </form>
                                <form>
                                    <label htmlFor="date">Tugilgan Yilingiz</label>
                                    <input type="date" size="10" />
                                </form>
                            </div>
                            <div className="ZOCvibor">
                                <p>Jinsi</p>
                                <form>
                                    <div>
                                        <label htmlFor="raz">Erkak</label>
                                        <input type="radio" checked name="raz" />
                                    </div>
                                    <div>
                                        <label htmlFor="raz">Ayol</label>
                                        <input type="radio" name="raz" />
                                    </div>
                                </form>
                            </div>
                            <div className="ZOCVibor">
                                <label htmlFor="vibor">Yo‘nalishlar</label>
                                <Dropdown />
                            </div>
                            <div className="ZOCManzil">
                                <label htmlFor="text">Manzil</label>
                                <input type="text" minLength="4" />
                            </div>
                            <div className="ZOCFail">
                                <form method="post">
                                    <p>Passport fayli</p>
                                    <label className="input-file">
                                        <input type="file" name='file' />
                                        <span>Fayl yuklash</span>
                                    </label>
                                </form>
                                <form method="post">
                                    <p>Attestat fayli</p>
                                    <label className="input-file">
                                        <input type="file" name='file' />
                                        <span>Fayl yuklash</span>
                                    </label>
                                </form>
                            </div>
                            <div className="ZOCtable">
                                <BasicTable/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}