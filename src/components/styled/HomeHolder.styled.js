import styled from 'styled-components';

const HomeHolder = styled.div`
    .Intro {
        background-color: rgba(0,0,0,0);
        padding: 1.2rem;
    }

    h1 {
        text-align: center;
        font-size: 3rem;
    }
    h2 {
        text-align: center;
        font-size: 1.15rem;
    }
    h3 {

        width: 20rem;
        border-radius: 0.2rem;
    }
    
    .btn-scroll{
        border-style: none;
        background-size: cover;
        background-color: transparent;
        width: 2.5rem;
        height: 2.5rem;
        cursor: pointer;
    }

    #left{
        background-image: url('https://cdn-icons-png.flaticon.com/512/892/892657.png');
        -webkit-transform: scaleX(-1);
        transform: scaleX(-1);
    }
    
    #right{
        background-image: url('https://cdn-icons-png.flaticon.com/512/892/892657.png');
    }

    .cont-label{
        background-color: rgba(0, 43, 54, 0.5);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 10rem;
    }
`;

export default HomeHolder;