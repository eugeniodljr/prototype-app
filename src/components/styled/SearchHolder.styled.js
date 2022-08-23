import styled from "styled-components";

const SearchHolder = styled.div`
    z-index: 2;
    position: absolute;
    left: 55rem;
    width: 20rem;
    height: 17rem;
    overflow-y: scroll;
    top: 0.5rem;

    form{
        display: flex;
        align-items: center;
        background-color: antiquewhite;
        width: 7.3rem;
        border-radius: 0.1875rem;
        padding: 0.1875rem;
    }
    
    input{
        width: 5.5rem;
        border: none;
        background: transparent;
        border-radius: inherit;
        /* outline: none; */
    }

    button{
        cursor: pointer;
        border-style: none;
        background-image: url('https://cdn-icons-png.flaticon.com/512/482/482631.png');
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        background-color: transparent;
        width: 2rem;
        height: 1rem;
        padding-left: 1rem;
        margin: 0;
        text-indent: -99rem;
        overflow: hidden;
    }
    
    #hidden{
        display: none;
        padding-top: 0.3rem;
    }
`;

export default SearchHolder;