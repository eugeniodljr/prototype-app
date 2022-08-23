import {useState} from 'react';
import { useNavigate } from 'react-router';

import ContactHolder from './styled/ContactHolder.styled';

const Contact = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    return(
        <ContactHolder>
            <div id='btn-contact'>
                <button onClick={()=>navigate(-1)}></button>
            </div> 
            <h2>Contact Me</h2>
            <form action='mailto:eugeniolabadanjunior@gmail.com'>
                <fieldset>                    
                    <legend>Recommendations? Suggestions?</legend>
                    <input placeholder='---Your Email---' type='email' value={email} onChange={e=>setEmail(e.target.value)}/>               
                    <br/><br/>
                    <textarea placeholder='---Your Message---' value={message} onChange={e=>setMessage(e.target.value)}/>
                    <br/><br/>
                    <input id='submit' type='submit' value='Submit'></input>              
                </fieldset>
            </form>            
        </ContactHolder>
    )
}

export default Contact;