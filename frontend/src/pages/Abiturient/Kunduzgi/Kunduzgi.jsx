import './Kunduzgi.css';
import { Link } from 'react-router-dom';
import { RiBankLine } from 'react-icons/ri';
import { AiOutlineRight } from 'react-icons/ai';

export default function Kunduzgi() {
    return (
        <div className="Kunduzgi">
            <div className="KunduzgiContainer">
                <div className="NewsTitleLine">
                    <Link className='NewsTitleLineIcon' to={'/'}><RiBankLine /></Link>
                    <AiOutlineRight className='Iconright' />
                    <Link className='NewsTitleLineText' to={'/'}>University</Link>
                    <AiOutlineRight className='Iconright' />
                    <p>Kunduzgi ta’lim yo’nalishlari</p>
                </div>
                <div className="KunduzgiContant">
                    <div className="KundizgiTitle">
                        <p>KUNDUZGI TA’LIM YO’NALISHLARI</p>
                    </div>
                    <div className="KunduzgiTable">
                        <table className='OneTableBoardTable'>
                            <tr className='OneTableBoard'>
                                <td className='PervoeNach'>Yo’nalish <br /> &nbsp;&nbsp;&nbsp; ko‘di</td>
                                <td className='Vtoroe'>Kunduzgi ta’lim yo’nalishlari nomi (o’quv muddati 4 yil)</td>
                                <td className='Tretie'>Shartnoma <br /> miqdori</td>
                            </tr>
                        </table>
                        <table>
                            <tr className='TableName'>
                                <td className='Pervoe'>60310100</td>
                                <td className='Vtoroe'>Iqtisodiyot (tarmoqlar va sohalar bo’yicha)</td>
                                <td className='Tretie'>17 002 750</td>
                            </tr>
                        </table>
                        <table>
                            <tr className='TableName'>
                                <td className='Pervoe'>60310100</td>
                                <td className='Vtoroe'>Iqtisodiyot (tarmoqlar va sohalar bo’yicha)</td>
                                <td className='Tretie'>17 002 750</td>
                            </tr>
                        </table>
                        <table>
                            <tr className='TableName'>
                                <td className='Pervoe'>60310100</td>
                                <td className='Vtoroe'>Iqtisodiyot (tarmoqlar va sohalar bo’yicha)</td>
                                <td className='Tretie'>17 002 750</td>
                            </tr>
                        </table>
                        <table>
                            <tr className='TableName'>
                                <td className='Pervoe'>60310100</td>
                                <td className='Vtoroe'>Iqtisodiyot (tarmoqlar va sohalar bo’yicha)</td>
                                <td className='Tretie'>17 002 750</td>
                            </tr>
                        </table>
                        <table>
                            <tr className='TableName'>
                                <td className='Pervoe'>60310100</td>
                                <td className='Vtoroe'>Iqtisodiyot (tarmoqlar va sohalar bo’yicha)</td>
                                <td className='Tretie'>17 002 750</td>
                            </tr>
                        </table>
                        <table>
                            <tr className='TableName'>
                                <td className='Pervoe'>60310100</td>
                                <td className='Vtoroe'>Iqtisodiyot (tarmoqlar va sohalar bo’yicha)</td>
                                <td className='Tretie'>17 002 750</td>
                            </tr>
                        </table>
                        <table>
                            <tr className='TableName'>
                                <td className='Pervoe'>60310100</td>
                                <td className='Vtoroe'>Iqtisodiyot (tarmoqlar va sohalar bo’yicha)</td>
                                <td className='Tretie'>17 002 750</td>
                            </tr>
                        </table>
                        <table>
                            <tr className='TableName'>
                                <td className='Pervoe'>60310100</td>
                                <td className='Vtoroe'>Iqtisodiyot (tarmoqlar va sohalar bo’yicha)</td>
                                <td className='Tretie'>17 002 750</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}