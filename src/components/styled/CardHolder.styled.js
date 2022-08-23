import styled from 'styled-components';

const CardHolder = styled.div`
    flex: 0 0 auto;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding-bottom: 0.7rem;
    background-color: rgb(0, 43, 54);
    width: 7rem;
    height: 14rem;
    text-align: center;
    font-size: 0.85rem;
    margin: 0.5rem;
    border-radius: 0.2rem;
    box-shadow: 0.125rem 0.2rem 0.3rem black;
    

    span{
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        margin: 0.2rem;
        height: auto;
    }
    
    img{
        width: 100%;
        height: 9.7rem;
        border-radius: 0.2rem;
    }

    .btn{
        cursor: pointer;
        font-size: 0.5rem;
        margin: 0 0.9rem;
        padding: 0.2rem;
        width: 1.2rem;
        height: 1.2rem;
        border-style: none;
        background-size: cover;
        background-color: transparent;
    }

    #btn-delete{
        background-image: url('https://cdn-icons-png.flaticon.com/512/1632/1632602.png');
    }

    #btn-update{
        background-image: url('https://cdn-icons-png.flaticon.com/512/1040/1040228.png');
    }
`;

export default CardHolder;