 
import { Link } from "react-router-dom";
import './Yangi.css';
import risone from './../../assets/image/pic1 1.png';
import risotwo from './../../assets/image/pic1 1.png';
import risthree from './../../assets/image/pic1 1.png';
import risfour from './../../assets/image/pic1 1.png';
import { LuMoveRight } from 'react-icons/lu';


export default function Yangiliklar() {
    return (
        <div className="Yangilik">
            <div className="YangiliklarContainer">
                <div className="YangilikTitleBox">
                    <div className="YangilikTitle"><p>Yangiliklar</p></div>
                    <div className="YangilikTitleButton"><h5>To‘liq</h5> <Link> <LuMoveRight/> </Link></div>
                </div>
                <div className="YangilikCards">
                    <div className="YangilikCard">
                        <div className="CardImgbox"><img src={risone} alt="" /></div>
                        <div className="Cardtext"><h4>Qabul 2023-2024</h4><p>Urganch RANCH Texnologiya
                            Universitetida 2023-2024 o'quv
                            yillari uchun qabul davom etmoqda.
                            Qabul davomida Siz 14 ta ta'lim
                            yo'nalishi bo'yicha talaba bo'lish
                            imkoniyatiga ega bolasiz. </p></div>
                        <div className="Cardbutton"><Link><button>Batafsil...</button></Link></div>
                    </div>
                    <div className="YangilikCard">
                        <div className="CardImgbox"><img src={risotwo} alt="" /></div>
                        <div className="Cardtext"><h4>Talabalar ligas</h4><p>2023 yil 12 sentyabr kuni “Urganch
                            Ranch texnologiya universiteti”da
                            Respublika “Talabalar ligasi” shaxmat
                            musobaqasining Universitet bosqichi
                            o‘tkazildi. </p></div>
                        <div className="Cardbutton"><Link><button>Batafsil...</button></Link></div>
                    </div>
                    <div className="YangilikCard">
                        <div className="CardImgbox"><img src={risthree} alt="" /></div>
                        <div className="Cardtext"><h4>Qabul 2023-2024</h4><p>Urganch RANCH Texnologiya
                            Universitetida 2023-2024 o'quv
                            yillari uchun qabul davom etmoqda.
                            Qabul davomida Siz 14 ta ta'lim
                            yo'nalishi bo'yicha talaba bo'lish
                            imkoniyatiga ega bolasiz.  </p></div>
                        <div className="Cardbutton"><Link><button>Batafsil...</button></Link></div>
                    </div>
                    <div className="YangilikCard">
                        <div className="CardImgbox"><img src={risfour} alt="" /></div>
                        <div className="Cardtext"><h4>Talabalar ligas</h4><p>2023 yil 12 sentyabr kuni “Urganch
                            Ranch texnologiya universiteti”da
                            Respublika “Talabalar ligasi” shaxmat
                            musobaqasining Universitet bosqichi
                            o‘tkazildi.</p></div>
                        <div className="Cardbutton"><Link><button>Batafsil...</button></Link></div>
                    </div>
                </div>
            </div>
        </div>
    )
}