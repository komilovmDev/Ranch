import './News.css';
import { Link } from 'react-router-dom';
import { RiBankLine } from 'react-icons/ri';
import { AiOutlineRight } from 'react-icons/ai';
import pic1 from './NewsAssets/img/pic1 1.png';

export default function News() {
    return (
        <div className="News">
            <div className="NewsContainer">
                <div className="NewsTitleLine">
                    <Link className='NewsTitleLineIcon' to={'/'}><RiBankLine /></Link>
                    <AiOutlineRight />
                    <Link className='NewsTitleLineText' to={'/News'}>Yangiliklar</Link>
                    <AiOutlineRight />
                </div>
                <div className="NewsBloks">
                    <Link to={'/New'}>
                        <div className="NewsBlok">
                            <div className="NewsBlokImg">
                                <img src={pic1} alt="" />
                            </div>
                            <div className="NewsBlokText">
                                <h4>Qabul 2023 2024</h4>
                                <p>Urganch RANCH Texnologiya Universitetida 2023-2024 o'quv yillari uchun qabul davom etmoqda. ...</p>
                            </div>
                        </div>
                    </Link>
                    <Link to={'/New'}>
                        <div className="NewsBlok">
                            <div className="NewsBlokImg">
                                <img src={pic1} alt="" />
                            </div>
                            <div className="NewsBlokText">
                                <h4>Qabul 2023 2024</h4>
                                <p>Urganch RANCH Texnologiya Universitetida 2023-2024 o'quv yillari uchun qabul davom etmoqda. ...</p>
                            </div>
                        </div>
                    </Link>
                    <Link to={'/New'}>
                        <div className="NewsBlok">
                            <div className="NewsBlokImg">
                                <img src={pic1} alt="" />
                            </div>
                            <div className="NewsBlokText">
                                <h4>Qabul 2023 2024</h4>
                                <p>Urganch RANCH Texnologiya Universitetida 2023-2024 o'quv yillari uchun qabul davom etmoqda. ...</p>
                            </div>
                        </div>
                    </Link>
                    <Link to={'/New'}>
                        <div className="NewsBlok">
                            <div className="NewsBlokImg">
                                <img src={pic1} alt="" />
                            </div>
                            <div className="NewsBlokText">
                                <h4>Qabul 2023 2024</h4>
                                <p>Urganch RANCH Texnologiya Universitetida 2023-2024 o'quv yillari uchun qabul davom etmoqda. ...</p>
                            </div>
                        </div>
                    </Link>
                    <Link to={'/New'}>
                        <div className="NewsBlok">
                            <div className="NewsBlokImg">
                                <img src={pic1} alt="" />
                            </div>
                            <div className="NewsBlokText">
                                <h4>Qabul 2023 2024</h4>
                                <p>Urganch RANCH Texnologiya Universitetida 2023-2024 o'quv yillari uchun qabul davom etmoqda. ...</p>
                            </div>
                        </div>
                    </Link>
                    <Link to={'/New'}>
                        <div className="NewsBlok">
                            <div className="NewsBlokImg">
                                <img src={pic1} alt="" />
                            </div>
                            <div className="NewsBlokText">
                                <h4>Qabul 2023 2024</h4>
                                <p>Urganch RANCH Texnologiya Universitetida 2023-2024 o'quv yillari uchun qabul davom etmoqda. ...</p>
                            </div>
                        </div>
                    </Link>
                </div>

            </div>
        </div>
    )
}