const FooterArray = ({list}) => {

    const createList = list.map(item=>{
       return(<li className="FooterArray_ListItem" key={item}>{item}</li>) 
    })

    return ( 
        <div className="footerElement_Column">
            <ul>
                {createList}
            </ul>
        </div>
     );
}
 
export default FooterArray;