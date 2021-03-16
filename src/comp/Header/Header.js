import "./Header.css"
import LogoSvg from '../../images/logo.svg';
import HeaderItem from "./HeaderItem";
const Header = () => {
    return ( 
        <header className="header">
            <img src={LogoSvg} alt="Logo"/>
            <div className="headerItems_Container">
                <HeaderItem item={"Features"} />
                <HeaderItem item={"Team"} />
                <HeaderItem item={"Sign In"} />
            </div>
        </header>
     );
}
 
export default Header;