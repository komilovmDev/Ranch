import './Hamkor.css';
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import ris from './../HamkorImg/ris1 (1).png'

export default function Hamkor() {
    return (
        <div className="Hamkor">
            <div className="HamkorTitleBox">
                <div className="HamkorTitle">
                    <p>Hamkorlarimiz</p>
                </div>
            </div>
            <div className="HamkorImgBox">
                <div className="HamkorSwiperBox">
                    <Swiper className="HamkorSwiper"
                        slidesPerView={8}
                        spaceBetween={0}
                        centeredSlides={true}
                        autoplay={{
                            delay: 10000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        modules={[Autoplay, Navigation]}
                    >
                        <SwiperSlide><div className="HamkorSliderImgBox"><Link><img src={ris} alt="" /></Link></div></SwiperSlide>
                        <SwiperSlide><div className="HamkorSliderImgBox"><Link><img src={ris} alt="" /></Link></div></SwiperSlide>
                        <SwiperSlide><div className="HamkorSliderImgBox"><Link><img src={ris} alt="" /></Link></div></SwiperSlide>
                        <SwiperSlide><div className="HamkorSliderImgBox"><Link><img src={ris} alt="" /></Link></div></SwiperSlide>
                        <SwiperSlide><div className="HamkorSliderImgBox"><Link><img src={ris} alt="" /></Link></div></SwiperSlide>
                        <SwiperSlide><div className="HamkorSliderImgBox"><Link><img src={ris} alt="" /></Link></div></SwiperSlide>
                        <SwiperSlide><div className="HamkorSliderImgBox"><Link><img src={ris} alt="" /></Link></div></SwiperSlide>
                        <SwiperSlide><div className="HamkorSliderImgBox"><Link><img src={ris} alt="" /></Link></div></SwiperSlide>
                        <SwiperSlide><div className="HamkorSliderImgBox"><Link><img src={ris} alt="" /></Link></div></SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}