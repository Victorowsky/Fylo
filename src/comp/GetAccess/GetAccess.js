import { useState } from "react";
import "./GetAccess.css"
const GetAccess = () => {

    const [email, setEmail] =useState('');
    const [error, setError] = useState('');

    const handleEmail = (e) =>{
        e.preventDefault()
        if(email && email.includes('@')){
            setEmail('')
            setError(false)
        }else{
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 3000);
        }
    }

    return ( 
        <div className="getAccess_Container">
            <div className="getAccess">
                <h1>Get early access today</h1>
                <p>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
                <div className="getAccess_Form">
                    <div className="form">
                        <form>
                             <input 
                                className="from_Input"
                                type="text" 
                                value={email} 
                                placeholder={'Enter your email'}
                                onChange={(e)=>{setEmail(e.target.value)}}
                                />
                                <button onClick={handleEmail} 
                                style={{display:'none'}}
                                type="submit"/>
                        </form>
                        <div className="button_GetStarted"
                        onClick={handleEmail}>
                        Get Started For Free
                        </div>
                    </div>
                   
    <p className="errorMessage">{error && 'Please enter a valid email address'}</p> 
                </div>
            </div>
        </div>
     );
}
 
export default GetAccess;