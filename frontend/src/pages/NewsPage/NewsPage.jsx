import './NewsPage.css';
import { Link } from 'react-router-dom';
import { RiBankLine } from 'react-icons/ri';
import { AiOutlineRight } from 'react-icons/ai';
import Pic1 from './../News/NewsAssets/img/pic1 1.png';

export default function NewsPage() {
    return (
        <div className="NewsPage">
            <div className="NewsPageContainer">
                <div className="NewsTitleLine">
                    <Link className='NewsTitleLineIcon' to={'/'}><RiBankLine /></Link>
                    <AiOutlineRight className='Iconright'/>
                    <Link className='NewsTitleLineText' to={'/News'}>Yangiliklar</Link>
                    <AiOutlineRight className='Iconright'/>
                    <p>Qabul 2023-2024</p>
                </div>

                <div className="NewsPageContant">
                    <div className="NewsPageContantTitle">
                        <h1>Qabul 2023-2024</h1>
                    </div>

                    <div className="NewsPageContantBox">
                        <div className="NewsPageContantBoxImg">
                            <img src={Pic1} alt="" />
                        </div>
                        <div className="NewsPageContantBoxText">
                            <p>Urganch RANCH Texnologiya Universitetida 2023-2024 o'quv yillari uchun qabul davom etmoqda.<br />
                                Qabul davomida Siz 14 ta ta'lim yo'nalishi bo'yicha talaba bo'lish imkoniyatiga ega bolasiz.</p>
                            <p>
                                Universitetimizda Siz o'qishni:<br />
                                <br />
                                ▫️ kunduzgi<br />
                                ▫️ sirtqi<br />
                                ▫️ magistratura<br />
                                ▫️ ikkinchi mutaxassislik<br />
                                <br />
                                ta'lim shakllarini tanlashingiz mumkin.Universitetimizda kontrakt summalari 12 mln dan boshlandi<br />
                            </p>
                            <p>
                                Universitetimizda qabul suhbat asosida qabul qilinadi qabulimizga shoshiling va talaba bolish imkoniyatini
                                qo'ldan boy bermang!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}