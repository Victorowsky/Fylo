import "./Opinions.css"
import Profile1Img from '../../images/profile-1.jpg';
import Profile2Img from '../../images/profile-2.jpg';
import Profile3Img from '../../images/profile-3.jpg';
import QuotesImg from '../../images/bg-quotes.png'
import Opinion from "./Opinion";
const Opinions = () => {
    return ( 
        <div className="opinionsContent">
            <img className="quotes" src={QuotesImg} alt=""/>
           <Opinion text={"Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."} imgLink={Profile1Img} name={'Satish Patel'} details={'Fouder & CEO, Huddle'}/>
           <Opinion text={"Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."} imgLink={Profile2Img} name={'Bruce McKenzie'} details={'Fouder & CEO, Huddle'} />
           <Opinion text={"Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine. "} imgLink={Profile3Img} name={'Iva Boyd'} details={'Fouder & CEO, Huddle'} />
        </div>
     );
}
 
export default Opinions;