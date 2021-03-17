const FlexRowItem = ({svg, title, text}) => {
    return ( 
        <div className="flexRow_Item">
                    <img src={svg} alt={svg}/>
                    <h2>{title}</h2>
                    <span>{text}</span>
                </div>
     );
}
 
export default FlexRowItem;