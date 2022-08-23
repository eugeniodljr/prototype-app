import styled from 'styled-components';

const AddNovelHolder = styled.div`
    margin: 0 auto;
    padding: 1rem 0;
    text-align: center;
    line-height: 1.8;
    background-color: rgba(0, 45, 55, 0.5);
    width: 40rem;

    input {
        width: 20rem;
        text-align: center;
        background-color: antiquewhite;
    }

    textarea {
        width: 20rem;
        height: 10rem;
        text-align: center;
        background-color: antiquewhite;
    }

    button{
        cursor: pointer;
        padding: 0.3rem;   
    }

    #btn-add{
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

export default AddNovelHolder;