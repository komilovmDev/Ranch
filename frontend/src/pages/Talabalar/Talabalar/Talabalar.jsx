import "./Talabalar.css"
import { Link, useParams } from "react-router-dom";
import { RiBankLine } from 'react-icons/ri';
import { AiOutlineRight } from 'react-icons/ai';
import axios from 'axios';
import { useEffect, useState } from 'react';
import fileSaver from 'file-saver';

//API key
const { id } = useParams()
const [allInfo, setAllInfo] = useState([])
const getAlltalab = async () => {
    const response = await axios.get(`https://utu-ranch.uz/api/content/${id}/`)
    setAllInfo(response.data)
    console.log(response.data);
}

useEffect(() => {
    getAlltalab()
}, [id])

const [data, setData] = useState([])
const getTalabalar = async () => {
    const response = await axios.get(`https://utu-ranch.uz/api/talabalar/`)
    console.log(response.data);
    setData(response.data)
}

useEffect(() => {
    getTalabalar()
}, [id])

const saveFile = (file) => {
    fileSaver.saveAs(
        process.env.REACT_APP_CLIENT_URL + `https://utu-ranch.uz/api/talabalar/${file}`,
    );
}

export default function Talabalarga() {
    return (
        <div className="Talabalarga">
            {
                allInfo.map(info => (
                    <div key={info.id} className="TalabalargaContainer">
                        <div className="NewsTitleLine">
                            <Link className='NewsTitleLineIcon' to={'/'}><RiBankLine /></Link>
                            <AiOutlineRight className='Iconright' />
                            <Link className='NewsTitleLineText' to={'/'}>University</Link>
                            <AiOutlineRight className='Iconright' />
                            <p>Talabalar</p>
                        </div>
                        <div className="TalabalarContent">
                            {
                                allInfo.map(item => (
                                    <div className="TalabalarFile">
                                        <div className="TalabalarPng">
                                            
                                        </div>
                                        <button onClick={() => saveFile(item.file)}>
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