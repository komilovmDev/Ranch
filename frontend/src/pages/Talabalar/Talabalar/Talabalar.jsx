import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { RiBankLine } from 'react-icons/ri';
import { AiOutlineRight } from 'react-icons/ai';
import axios from 'axios'
import { useEffect, useState } from "react";



export default function Talabalarga() {

    const [data, setData] = useState([])
    const getData = async () => {
        const response = await axios.get(`https://utu-ranch.uz/api/talabalar/`)
        setData(response.data)
    }

    useEffect(() => {
        getData()
    }, [])

    const { id } = useParams()
    const [alldata, setallData] = useState([])
    const GetallData = async () => {
        const response = await axios.get(`https://utu-ranch.uz/api/content/${id}/`)
        setallData(response.data)
    }

    useEffect(() => {
        GetallData()
    }, [id])

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
