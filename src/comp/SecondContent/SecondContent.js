import "./SecondContent.css"
import SecuritySvg from '../../images/icon-security.svg';
import CollaborationSvg from '../../images/icon-collaboration.svg';
import AccessAnywhereSvg from '../../images/icon-access-anywhere.svg';
import AnyFileSvg from '../../images/icon-any-file.svg';
import FlexRowItem from "./FlexRowItem";

const SecondContent = () => {
    return ( 
        <div className="secondContent">
            <div className="flexRow">
                <FlexRowItem svg={AccessAnywhereSvg} title="Access your files, anywhere" text="The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere." />
                
                <FlexRowItem svg={SecuritySvg} title="Security you can trust" text="2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files. No email attachments required." />
         
            </div>
            <div className="flexRow">
            <FlexRowItem svg={CollaborationSvg} title="Real-time collaboration" text="Securely share files and folders with friends, family and colleagues for live collaboration." />
            <FlexRowItem svg={AnyFileSvg} title="Store any type of file " text="Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared," />
            </div>
        </div>
     );
}
 
export default SecondContent;