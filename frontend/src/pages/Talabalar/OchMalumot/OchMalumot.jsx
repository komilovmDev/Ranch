import './OchMalumot.css';
import { Link } from "react-router-dom";
import { RiBankLine } from 'react-icons/ri';
import { AiOutlineRight } from 'react-icons/ai';
import axios from 'axios';

export default function OchMalumot() {
    return (
        <div className="OchMalumot">
            <div className="OchMalumotContainer">
                <div className="NewsTitleLine">
                    <Link className='NewsTitleLineIcon' to={'/'}><RiBankLine /></Link>
                    <AiOutlineRight className='Iconright' />
                    <Link className='NewsTitleLineText' to={'/'}>University</Link>
                    <AiOutlineRight className='Iconright' />
                    <p>Ochiq Ma’lumotlar</p>
                </div>
                <div className="OchMalumotContent">
                    <div className="OMCTitle">
                        <p>
                            Soha hodimlarining huquqiy ongi va madaniyatini yuksaltirish bo’yicha seminarlar
                        </p>
                    </div>
                    <div className="OMCBoxObsh">
                        <div className="OMCBox">
                            <div className="imgBoxOMC">
                                <img src="" alt="" />
                            </div>
                            <div className="TextBoxOMC">
                                <p>Dekabir 6, 2022</p>
                                <p> O‘zbekiston Respublikasi Konstitutsiyasining mazmun-mohiyatini tushuntirish bo‘yicha seminar ...</p>
                            </div>
                        </div>
                        <div className="OMCBox">
                            <div className="imgBoxOMC">
                                <img src="" alt="" />
                            </div>
                            <div className="TextBoxOMC">
                                <p>Dekabir 6, 2022</p>
                                <p> O‘zbekiston Respublikasi Konstitutsiyasining mazmun-mohiyatini tushuntirish bo‘yicha seminar ...</p>
                            </div>
                        </div>
                        <div className="OMCBox">
                            <div className="imgBoxOMC">
                                <img src="" alt="" />
                            </div>
                            <div className="TextBoxOMC">
                                <p>Dekabir 6, 2022</p>
                                <p> O‘zbekiston Respublikasi Konstitutsiyasining mazmun-mohiyatini tushuntirish bo‘yicha seminar ...</p>
                            </div>
                        </div>
                        <div className="OMCBox">
                            <div className="imgBoxOMC">
                                <img src="" alt="" />
                            </div>
                            <div className="TextBoxOMC">
                                <p>Dekabir 6, 2022</p>
                                <p> O‘zbekiston Respublikasi Konstitutsiyasining mazmun-mohiyatini tushuntirish bo‘yicha seminar ...</p>
                            </div>
                        </div>
                        <div className="OMCBox">
                            <div className="imgBoxOMC">
                                <img src="" alt="" />
                            </div>
                            <div className="TextBoxOMC">
                                <p>Dekabir 6, 2022</p>
                                <p> O‘zbekiston Respublikasi Konstitutsiyasining mazmun-mohiyatini tushuntirish bo‘yicha seminar ...</p>
                            </div>
                        </div>
                        <div className="OMCBox">
                            <div className="imgBoxOMC">
                                <img src="" alt="" />
                            </div>
                            <div className="TextBoxOMC">
                                <p>Dekabir 6, 2022</p>
                                <p> O‘zbekiston Respublikasi Konstitutsiyasining mazmun-mohiyatini tushuntirish bo‘yicha seminar ...</p>
                            </div>
                        </div>
                        <div className="OMCBox">
                            <div className="imgBoxOMC">
                                <img src="" alt="" />
                            </div>
                            <div className="TextBoxOMC">
                                <p>Dekabir 6, 2022</p>
                                <p> O‘zbekiston Respublikasi Konstitutsiyasining mazmun-mohiyatini tushuntirish bo‘yicha seminar ...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}