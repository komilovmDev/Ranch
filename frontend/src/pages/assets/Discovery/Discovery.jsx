import './Discovery.css';
import zvezda from './../IMG/zvezda.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import Zdanie from './../IMG/Ranch_Zdanie.png'
import { Link } from "react-router-dom";

export default function Discovery() {
    return (
        <div className="Discovery">
            <div className="DiscoveryContainer">
                <div className="DiscoveryLeft">
                    <div className="DiscoveryTitle">
                        <p>Discover</p>
                    </div>
                    <div className="DiscoveryHref">
                        <Link><img src={zvezda} alt="" /> <button>Imkoniyatlar</button></Link>
                        <Link><img src={zvezda} alt="" /> <button>Masofaviy ta’lim</button></Link>
                        <Link><img src={zvezda} alt="" /> <button>Talabalar hayoti</button></Link>
                        <Link><img src={zvezda} alt="" /> <button>Code Craft</button></Link>
                        <Link><img src={zvezda} alt="" /> <button>Bitiruvchilar hikoyalari</button></Link>
                        <Link><img src={zvezda} alt="" /> <button>Kibersport</button></Link>
                    </div>
                </div>
                <div className="DiscoveryRight">
                    <div className="DiscoverySwiper"> 
                                    <Swiper className="DiscoverySwiper"
                                        slidesPerView={3}
                                        spaceBetween={-120}
                                        centeredSlides={true}
                                        autoplay={{
                                            delay: 10000,
                                            disableOnInteraction: false,
                                        }}
                                        loop={true}
                                        modules={[Autoplay, Navigation]}
                                    >
                                        <SwiperSlide><div className="DiscoverySliderImgBox"><img src={Zdanie} alt="" /></div></SwiperSlide>
                                        <SwiperSlide><div className="DiscoverySliderImgBox"><img src={Zdanie} alt="" /></div></SwiperSlide>
                                        <SwiperSlide><div className="DiscoverySliderImgBox"><img src={Zdanie} alt="" /></div></SwiperSlide>
                                        <SwiperSlide><div className="DiscoverySliderImgBox"><img src={Zdanie} alt="" /></div></SwiperSlide>
                                        <SwiperSlide><div className="DiscoverySliderImgBox"><img src={Zdanie} alt="" /></div></SwiperSlide>
                                        <SwiperSlide><div className="DiscoverySliderImgBox"><img src={Zdanie} alt="" /></div></SwiperSlide>
                                        <SwiperSlide><div className="DiscoverySliderImgBox"><img src={Zdanie} alt="" /></div></SwiperSlide>
                                        <SwiperSlide><div className="DiscoverySliderImgBox"><img src={Zdanie} alt="" /></div></SwiperSlide>
                                        <SwiperSlide><div className="DiscoverySliderImgBox"><img src={Zdanie} alt="" /></div></SwiperSlide>
                                    </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
    )
}