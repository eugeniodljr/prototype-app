import styled from 'styled-components';

const AboutHolder = styled.div`
    text-align: center;
    line-height: 2;
    margin: 0 auto;
    padding: 1rem 0;
    width: 40rem;
    height: 70rem;
    background-color: rgba(0,45, 55, 0.5);

    img{
        width: 80%;
        height: auto;
    }

    #btn-about{
        text-align: start;
        padding-left: 2rem;
        button{
            cursor: pointer;
            border-style: none;
            background-size: cover;
            background-color: transparent;
            background-image: url('https://cdn-icons-png.flaticon.com/512/892/892657.png');
            -webkit-transform: scaleX(-1);
            transform: scaleX(-1);
            width: 2.5rem;
            height: 2.5rem;
        }
    }
`;

export default AboutHolder;