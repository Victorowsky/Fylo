import "./FirstContent.css"
import illustrationIntro from '../../images/illustration-intro.png';
const FirstContent = () => {
    return ( 
        <div className="firstContent">
            <div className="introImage">
                <img src={illustrationIntro} alt=""/>
            </div>
            <div className="firstContent_Text">
                <h1>All your files in one secure location, accessible anywhere.</h1>
                <div className="span_text">Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.</div>
            </div>
            <div className="button_GetStarted">Get Started</div>
    
        </div>
     );
}
 
export default FirstContent;