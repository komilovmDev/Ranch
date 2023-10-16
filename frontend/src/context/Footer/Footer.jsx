import './Footer.css';
import WhiteRanch from './../../pages/assets/IMG/Ranch_White.png';

export default function Footer() {
    return (
        <div className="Footer">
            <div className="FooterContainer">
                <div className="FooterContainerLeft">
                    <div className="FooterContainerLeftTitle">
                        <img src={WhiteRanch} alt="logo" />
                        <a href="tel:+998622277772">62 227 77 72</a>
                        <p>Urganch shahar, Xonqa ko'chasi, 26 uy</p>
                    </div>
                    <div className="FooterContainerLeftMap">
                        <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ac1853db4b78d4e06c7e8dcf61524e6c9d2ac02d52bcef2fd51f26e1155da4ef8&amp;source=constructor" frameborder="0"></iframe>
                    </div>
                </div>
                <div className="FooterContainerRight">
                    <div className="FooterContainerRightUp">
                        <div className="FooterMalumot">
                            <div className="FooterMalumotTitle">
                                <h1></h1>
                            </div>
                            <div className="FooterMalumotHref">
                                
                            </div>
                        </div>
                        <div className="FooterQabul">
                            
                        </div>
                        <div className="FooterStudent">
                            
                        </div>
                    </div>
                    <div className="FooterContainerRightDuwn">

                    </div>
                </div>
            </div>
        </div>
    )
}