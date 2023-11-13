import './Galereya.css';
import { Link } from "react-router-dom";
import img from "./../Home/HomeAssets/IMG/Ranch_Zdanie.png";
import {RiBankLine} from 'react-icons/ri'
import {AiOutlineRight} from 'react-icons/ai'


export default function Galereya() {
    return (
        <div className="Galereya">
            <div className="GalereyaContainer">
                <div className="NewsTitleLine">
                    <Link className='NewsTitleLineIcon' to={'/'}><RiBankLine /></Link>
                    <AiOutlineRight className='Iconright' />
                    <Link className='NewsTitleLineText' to={'/'}>University</Link>
                    <AiOutlineRight className='Iconright' />
                    <p>Imkoniyatlar</p>
                </div>
                <div className="GalereyaContant">
                    <aside>
                        <p>Discover</p>
                        <div className="AsideLink">
                            <Link>Imkoniyatlar</Link>
                            <Link>Masofaviy ta’lim</Link>
                            <Link>Talabalar hayoti</Link>
                            <Link>Code Craft</Link>
                            <Link>Bitiruvchilar hikoyalari</Link>
                            <Link>Kibersport</Link>
                        </div>
                    </aside>
                    <div className="GalereyaCont">
                        <div className="GalleryContImgBox">
                            <div className="imgBox">
                                <img src={img} alt="" />
                            </div>
                            <div className="imgBox">
                                <img src={img} alt="" />
                            </div>
                            <div className="imgBox">
                                <img src={img} alt="" />
                            </div>
                            <div className="imgBox">
                                <img src={img} alt="" />
                            </div>
                            <div className="imgBox">
                                <img src={img} alt="" />
                            </div>
                            <div className="imgBox">
                                <img src={img} alt="" />
                            </div>
                            <div className="imgBox">
                                <img src={img} alt="" />
                            </div>
                            <div className="imgBox">
                                <img src={img} alt="" />
                            </div>
                            <div className="imgBox">
                                <img src={img} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}