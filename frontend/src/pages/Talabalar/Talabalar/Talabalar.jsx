import "./Talabalar.css"
import { Link, useParams } from "react-router-dom";
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
            {
                alldata.map(infos => (
                    <div key={infos.id} className="TalabalargaContainer">
                        <div className="NewsTitleLine">
                            <Link className='NewsTitleLineIcon' to={'/'}><RiBankLine /></Link>
                            <AiOutlineRight className='Iconright' />
                            <Link className='NewsTitleLineText' to={'/'}>University</Link>
                            <AiOutlineRight className='Iconright' />
                            <p>Talabalar</p>
                        </div>
                        <div className="TalabalarContent">
                            {
                                data.map(item => (
                                    <div className="TalabalarFile">
                                        <div className="TalabalarPng">
                                            {item.title}
                                        </div>
                                        <button >
                                            Download File
                                        </button>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    )
}