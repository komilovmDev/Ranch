import './Swiper.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import Zdanie from './../../pages/Home/HomeAssets/IMG/Ranch_Zdanie.png'


export default function Sviper() {

    return (
        <div className='Sviper'>
            <div className="SwiperBarbeg">
                <div className="SviperSwiper">
                    <Swiper className="Swiper"
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 10000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        modules={[Autoplay, Navigation]}
                        >
                        <SwiperSlide><div className="SliderImgBox"><img src={Zdanie} alt="" /></div></SwiperSlide>
                        <SwiperSlide><div className="SliderImgBox"><img src={Zdanie} alt="" /></div></SwiperSlide>
                        <SwiperSlide><div className="SliderImgBox"><img src={Zdanie} alt="" /></div></SwiperSlide>
                        <SwiperSlide><div className="SliderImgBox"><img src={Zdanie} alt="" /></div></SwiperSlide>
                        <SwiperSlide><div className="SliderImgBox"><img src={Zdanie} alt="" /></div></SwiperSlide>
                        <SwiperSlide><div className="SliderImgBox"><img src={Zdanie} alt="" /></div></SwiperSlide>
                        <SwiperSlide><div className="SliderImgBox"><img src={Zdanie} alt="" /></div></SwiperSlide>
                        <SwiperSlide><div className="SliderImgBox"><img src={Zdanie} alt="" /></div></SwiperSlide>
                        <SwiperSlide><div className="SliderImgBox"><img src={Zdanie} alt="" /></div></SwiperSlide>
                    </Swiper>

                </div>
            </div>
            <div className="BlankBegBox">
                <marquee className='BlankBeg' scrollamount="5"> • RANCH - bu imkoniyat !!! • RANCH - bu imkoniyat !!! • RANCH - bu imkoniyat !!! • RANCH - bu imkoniyat !!! • RANCH - bu imkoniyat !!! • RANCH - bu imkoniyat !!! • RANCH - bu imkoniyat !!! • RANCH - bu imkoniyat !!! • RANCH - bu imkoniyat !!! • RANCH - bu imkoniyat !!! • RANCH - bu imkoniyat !!! • RANCH - bu imkoniyat !!! • RANCH - bu imkoniyat !!! • RANCH - bu imkoniyat !!! • RANCH - bu imkoniyat !!! • RANCH - bu imkoniyat !!! • RANCH - bu imkoniyat !!! • RANCH - bu imkoniyat !!! • RANCH - bu imkoniyat !!! • RANCH - bu imkoniyat !!! • RANCH - bu imkoniyat !!! • RANCH - bu imkoniyat !!! • RANCH - bu imkoniyat !!! • RANCH - bu imkoniyat !!! • RANCH - bu imkoniyat !!! • RANCH - bu imkoniyat !!! • RANCH - bu imkoniyat !!! • RANCH - bu imkoniyat !!! </marquee>
            </div>
        </div>
    )
}