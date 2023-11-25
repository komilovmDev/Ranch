import './Burger.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link , NavLink } from 'react-router-dom';
import { MdKeyboardArrowRight } from "react-icons/md"
import logo from './../../pages/University/Img/Ranch 1 copy 5.png'
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { AiFillCaretLeft } from "react-icons/ai";

const Burger = () => {

    const [data, setData] = useState([]);

    const getCategory = async () => {
        try {
            const response = await axios.get('https://api.u-ukm.uz/categories/');
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        getCategory();
    }, []);

    const refreshPageHome = () => {
        window.location.assign('/');
    }
    
    return (
        <section id='menu'>
            <article >
                <div className="menu">
                    <div className='divTuggleOb'>
                        <input id="menu--toggle" type="checkbox" />
                        <label className="menu--toggle__trigger" for="menu--toggle"></label>
                        <label className='menu--toggle__burger' for="menu--toggle"></label>
                        <ul className="menu__body">
                            <li className="menu__body-element">
                                {
                                    data.map(item => (
                                        <>
                                            <div id="wrapper">
                                                <p><a className="button" href={`#popup1${item.id}`}>{lang == 'uz' ? item.name_uz : lang == 'ru' ? item.name_ru : item.name_en}<MdKeyboardArrowRight size={'24px'} /></a></p>
                                            </div>
                                            <div id={`popup1${item.id}`} className="overlay">
                                                {
                                                    item.children.map(chilItem => (
                                                        <div className="popup">
                                                            <a className="close" href="#*"><AiFillCaretLeft /></a>
                                                            <div className="content">
                                                                <h1>{lang == 'uz' ? chilItem.name_uz : lang == 'ru' ? chilItem.name_ru : chilItem.name_en}</h1>
                                                            </div>
                                                            {
                                                                chilItem.children.map(linkChil => (
                                                                    <div className='MapBox'>
                                                                        <Link onClick={() => window.location.assign(`/${chilItem.yordamchi}/${linkChil.id}`)}><h4>{lang == 'uz' ? linkChil.name_uz : lang == 'ru' ? linkChil.name_ru : linkChil.name_en}</h4></Link>
                                                                    </div>
                                                                ))

                                                            }
                                                        </div>
                                                    ))
                                                }
                                            </div>

                                        </>
                                    ))
                                }
                            </li >
                        </ul>
                        <div id='logoUkm' className='logoUkm'>
                            <div className='GlavBtw'>
                                <NavLink onClick={refreshPageHome}>
                                    <img src={logo} alt='' />
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </article>


        </section>

    )
}

export default Burger