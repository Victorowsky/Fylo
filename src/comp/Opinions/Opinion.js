const Opinion = ({text, imgLink, name, details}) => {
    return ( 
        <div className="opinion">
               <p className="opinion_Text">{text}</p>
               <div className="authorInfo">
                    <div className="authorImg">
                        <img src={imgLink} alt="Profile"/>
                    </div>
                    <div className="authorData">
                        <p className="name">{name}</p>
                        <p className="details">{details}</p>
                        </div>
               </div>
           </div>
     );
}
 
export default Opinion;