import {Link} from 'react-router-dom';
import FooterHolder from './styled/FooterHolder.styled';

const Footer = () => {
    return(
        <FooterHolder>
            <p>
                Copyright © 2022 All rights reserved
            </p>

            <p>
                <Link className='link-footer' to='/terms'>Terms&nbsp;&nbsp;</Link>|
                <Link className='link-footer'to='/privacy'>&nbsp;&nbsp;Privacy</Link>
            </p>
        </FooterHolder>
    )
}

export default Footer;