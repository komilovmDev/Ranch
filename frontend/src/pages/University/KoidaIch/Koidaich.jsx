import './Koidaich.css';
import { Link } from 'react-router-dom';
import { RiBankLine } from 'react-icons/ri';
import { AiOutlineRight } from 'react-icons/ai';
import Ichtartib from '../../../context/TextUnik/Ichtartib';

export default function Koidaich() {
    return(
        <div className="Koidaich">
            <div className="KoidaichContainer">
                <div className="NewsTitleLine">
                    <Link className='NewsTitleLineIcon' to={'/'}><RiBankLine /></Link>
                    <AiOutlineRight />
                    <Link className='NewsTitleLineText' to={'/'}>University</Link>
                    <AiOutlineRight />
                    <p>Universitet Ichki tartib qoidalari</p>
                </div>
                <div className="KoidachText">
                    <Ichtartib/>
                </div>
            </div>
        </div>
    )
}