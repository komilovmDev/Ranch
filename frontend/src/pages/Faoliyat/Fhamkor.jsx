import './Fhamkor.css';
import { Link } from 'react-router-dom';
import { RiBankLine } from 'react-icons/ri';
import { AiOutlineRight } from 'react-icons/ai';
import Fpic1 from './Fimg/pic1 1.png';

export default function Fhamkor() {
    return (
        <div className='Fhamkor'>
            <div className="FhamkorContainer">
                <div className="NewsTitleLine">
                    <Link className='NewsTitleLineIcon' to={'/'}><RiBankLine /></Link>
                    <AiOutlineRight className='Iconright' />
                    <Link className='NewsTitleLineText' to={'/'}>University</Link>
                    <AiOutlineRight className='Iconright' />
                    <p>Xalqaro hamkor tashkilotlar</p>
                </div>
                <div className="FhamkorContantGlav">
                    <div className="FhamkorContant">
                        <div className="FhamkorContantBox">
                            <div className="FhamkorBoxImg">
                                <img src={Fpic1} alt="" />
                            </div>
                            <div className="FhamkorBoxTitle">
                                <p>
                                    Belarus-Rossiya universitet
                                </p>
                            </div>
                        </div>
                        <div className="FhamkorContantBox">
                            <div className="FhamkorBoxImg">
                                <img src={Fpic1} alt="" />
                            </div>
                            <div className="FhamkorBoxTitle">
                                <p>
                                    Belarus-Rossiya universitet
                                </p>
                            </div>
                        </div>
                        <div className="FhamkorContantBox">
                            <div className="FhamkorBoxImg">
                                <img src={Fpic1} alt="" />
                            </div>
                            <div className="FhamkorBoxTitle">
                                <p>
                                    Belarus-Rossiya universitet
                                </p>
                            </div>
                        </div>
                        <div className="FhamkorContantBox">
                            <div className="FhamkorBoxImg">
                                <img src={Fpic1} alt="" />
                            </div>
                            <div className="FhamkorBoxTitle">
                                <p>
                                    Belarus-Rossiya universitet
                                </p>
                            </div>
                        </div>
                        <div className="FhamkorContantBox">
                            <div className="FhamkorBoxImg">
                                <img src={Fpic1} alt="" />
                            </div>
                            <div className="FhamkorBoxTitle">
                                <p>
                                    Belarus-Rossiya universitet
                                </p>
                            </div>
                        </div>
                        <div className="FhamkorContantBox">
                            <div className="FhamkorBoxImg">
                                <img src={Fpic1} alt="" />
                            </div>
                            <div className="FhamkorBoxTitle">
                                <p>
                                    Belarus-Rossiya universitet
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}