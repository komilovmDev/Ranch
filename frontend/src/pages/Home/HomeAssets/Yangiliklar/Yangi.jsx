
import { Link } from "react-router-dom";
import './Yangi.css';
import risone from './../image/pic1 1.png';
import risotwo from './../image/pic1 1.png';
import risthree from './../image/pic1 1.png';
import risfour from './../image/pic1 1.png';
import { useState, useEffect } from "react";
import { LuMoveRight } from 'react-icons/lu';
import axios from "axios";
import DOMPurify from 'dompurify';

export default function Yangiliklar() {


    const [data, setData] = useState([])
    const getNews = async () => {
        const response = await axios.get(`https://utu-ranch.uz/api/yangilik/43`)
        setData(response.data.slice(0, 4));
        console.log(response.data.slice(0, 4));
    }

    useEffect(() => {
        getNews()
    }, [])


    return (
        <div className="Yangilik">
            <div className="YangiliklarContainer">
                <div className="YangilikTitleBox">
                    <div className="YangilikTitle"><p>Yangiliklar</p></div>
                    <div className="YangilikTitleButton"><h5>To‘liq</h5> <Link> <LuMoveRight /> </Link></div>
                </div>
                <div className="YangilikCards">
                    {
                        data.map(item => (
                            <div className="YangilikCard" key={item.id}>
                                <Link to={`yanglik-toliq/${item.id}`}>
                                    <div className="CardImgbox"><img src={item.image} alt="" /></div>
                                </Link>
                                <div className="Cardtext">
                                    <h4>{item.mini_title}...</h4>
                                    <p dangerouslySetInnerHTML={{ __html: item.mini_desc}}></p>
                                </div>
                                <div className="Cardbutton"><Link to={`yanglik-toliq/${item.id}`}><button>Batafsil...</button></Link></div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}