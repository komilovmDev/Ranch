import './Markaz.css';
import { Link } from 'react-router-dom';
import { RiBankLine } from 'react-icons/ri';
import { AiOutlineRight } from 'react-icons/ai';

export default function Markaz() {
    return (
        <div className="Markaz">
            <div className="MarkazContainer">
                <div className="NewsTitleLine">
                    <Link className='NewsTitleLineIcon' to={'/'}><RiBankLine /></Link>
                    <AiOutlineRight />
                    <Link className='NewsTitleLineText' to={'/'}>University</Link>
                    <AiOutlineRight />
                    <p>Markaz va bo'limlar</p>
                </div>
                <div className="MarkazTitle">
                    <h4>Bu sahifa yangilanmoqda</h4>
                    <p>Iltimos, keyinroq tekshiring</p>
                </div>
            </div>
        </div>
    )
}