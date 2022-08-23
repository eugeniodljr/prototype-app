import styled from "styled-components";

const SearchCardHolder = styled.div`
        background-color: rgba(0, 45, 55, 0.85);
        height: 1.95rem;
        padding: 0.2rem 0.2rem;

    img{
        float: left;
        width: 1.3rem;
        height: 1.95rem;
    }
    span{
        padding-left: 0.5rem;
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
    }
`;

export default SearchCardHolder;