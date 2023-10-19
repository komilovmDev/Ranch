import './Home.css'  
import Sviper from '../../context/Swiper/Sviper';
import Yangiliklar from '../assets/Yangiliklar/Yangi';
import Discovery from '../assets/Discovery/Discovery'; 
import Count from '../assets/Count/Count';
import Hamkor from '../assets/Hamkor/Hamkor';

export default function Home() {
    return (
        <div className='Home'>
            <div className="HomeSviper">
                <Sviper />
            </div>
            <div className="HomeYang">
                <Yangiliklar />
            </div>
            <div className="Discovery">
                <Discovery/>
            </div>
            <div className="Count">
                <Count/>
            </div>
            <div className="Hamkor">
                <Hamkor/>
            </div>
        </div>
    )
}