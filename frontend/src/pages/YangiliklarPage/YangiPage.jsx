import './YangiPage.css';
import vector from './../assets/IMG/RanchIcon.png';
import { AiOutlineRight } from 'react-icons/ai';

export default function YangiPage() {
    return(
        <div className="YangiPage">
            <div className="YangiPageContainer">
                <div className="YangiTop">
                    <img src={vector} alt="" />
                    <AiOutlineRight/>
                </div>
            </div>
        </div>
    )
}