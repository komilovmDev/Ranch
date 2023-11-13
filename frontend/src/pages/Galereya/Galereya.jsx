import './Galereya.css';
import { Link } from "react-router-dom";
import img from "./../Home/HomeAssets/IMG/Ranch_Zdanie.png";
import {RiBankLine} from 'react-icons/ri'
import {AiOutlineRight} from 'react-icons/ai'
import axios from 'axios';
import { useEffect, useState } from 'react';
import zvezda from '../../pages/Home/HomeAssets/IMG/zvezda.png';

export default function Galereya() {

    const [catData , setCatData] = useState([])
    const getcategoryGallary = async () => {
        const response = await axios.get(`https://utu-ranch.uz/api/all/cat/gal/`)
        setCatData(response.data)
        console.log(response.data);
    }

    useEffect(() => {
        getcategoryGallary()
    },[])

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
                        <p className='TitleAside'>Discover</p>
                        <div className="AsideLink">
                            {
                                catData.map(item => (
                                    <Link><img src={zvezda} alt="" />{item.name}</Link>
                                ))
                            }
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