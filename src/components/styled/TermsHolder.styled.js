import styled from 'styled-components';

const TermsHolder = styled.div`
    background-color: rgba(0, 45, 55, 0.5);
    margin: 0 auto;

    button{
        border-style: none;
        background-size: cover;
        background-color: transparent;
        background-image: url('https://cdn-icons-png.flaticon.com/512/892/892657.png');
        -webkit-transform: scaleX(-1);
        transform: scaleX(-1);
        width: 2.5rem;
        height: 2.5rem;
    }

    h2 {
        text-align: center;
    }

    @media screen and (max-width: 767px){
        padding: 4rem 1.5rem;
        font-size: 0.8rem;
    }

    @media screen and (min-width: 768px){
        padding: 4rem;
        width: 45rem;
    }
`;

export default TermsHolder;