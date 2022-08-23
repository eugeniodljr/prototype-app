import styled from 'styled-components';

const FooterHolder = styled.div`
    text-align: center;
    
    .link-footer{
        text-decoration:none;
        color: antiquewhite;
    }
    @media screen and (max-width: 767px){
        font-size: 0.65rem;
        line-height: 0.5;
        padding: 4rem;
    }
    
    @media screen and (min-width: 768px){
        font-size: 0.8rem;
        padding: 4rem;
    }
`;

export default FooterHolder;