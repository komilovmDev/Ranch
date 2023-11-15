import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { RiBankLine } from 'react-icons/ri';
import { AiOutlineRight } from 'react-icons/ai';

import './Talabalar.css';
import { Link } from 'react-router-dom';

export default function Talabalarga() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getTalabalar = async () => {
            try {
                const response = await axios.get('https://utu-ranch.uz/api/talabalar/');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        getTalabalar();
    }, []);

    return (
        <div className="Talabalarga">
            <div className="TalabalargaContainer">
                <div className="NewsTitleLine">
                    <RiBankLine className='NewsTitleLineIcon' />
                    <AiOutlineRight className='Iconright' />
                    <p className='NewsTitleLineText'>University</p>
                    <AiOutlineRight className='Iconright' />
                    <p>Talabalar</p>
                </div>
                <div className="TalabalarContent">
                    {
                        data.map(item => (
                            <div key={item.id} className="TalabalarFile">

                                <div className="TalabalarPng">

                                </div>
                                <div className="TalabaButtonObsh">
                                    <div className="TalabalarText">
                                        <h1>{item.title}</h1>
                                    </div>
                                    <Link>
                                        <div className="TalabalarButton">
                                            <div className="TalabalarButtonImg">
                                                <img src="" alt="" />
                                            </div>
                                            <div className="TalabalarButtonHref">
                                                <p>Fayl yuklash</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}
