const FooterElement = ({imgLink, text}) => {
    return ( 
        <div className="footerElement">
                    <div className="footerElement_Row">
                    <img src={imgLink} alt=''/>
                    <p>{text}</p>
                    </div>
                    
        </div>
     );
}
 
export default FooterElement;