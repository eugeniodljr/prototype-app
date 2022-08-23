import styled from "styled-components";

const FilterOptionsHolder = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    padding: 2rem 0;
    justify-content: center;
    align-self: center;
    background-color: rgba(0, 45, 55, 0.8);
    width: 30rem;
    height: auto;
    
    .filter-option{
        text-align: center;
        margin: 0 1rem;
    }

    #language, #status_in_coo, #completely_translated, #readers, #chapters, #year{
        text-align: center;
    }
`;

export default FilterOptionsHolder;