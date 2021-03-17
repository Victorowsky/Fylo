import "./ThirdContent.css"
import ProductiveSvg from '../../images/illustration-stay-productive.png';
const ThirdContent = () => {
    return ( 
        <div className="thirdContent">
            <div className="image">
                <img src={ProductiveSvg} alt="Stay productive"/>
            </div>
            <div className="thirdContent_Text">
                <h1>Stay prodcutive, wherever you are</h1>
                <p>Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
                <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required. </p>
                <p className="p_hover">See how Fylo works</p>
            </div>
        </div>
     );
}
 
export default ThirdContent;