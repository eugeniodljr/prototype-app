// import { useState } from "react";

import SearchHolder from "./styled/SearchHolder.styled";
import SearchCard from "./SearchCard";
import { useReducer } from "react";

const initialState = {
    query: ""
}

const reducer = (state, action) => {
    switch(action.type){
        case "INPUT_QUERY":
            return {
                ...state,
                query: action.payload
            }
        default:
            return;
    }   
}

const Search2 = ({state}) => {
    const [state2, dispatch] = useReducer(reducer, initialState);

    const hide = document.getElementById('hidden');

    const showHidden = () => {
        hide.style.display='block';
    }
    
    document.addEventListener('mouseup', e=>{
        if(!hide.contains(e.target)){
            hide.style.display='none';
        }

    });

    const queryFunction = novel =>{
        if(state2.query===''){
            return novel;
        }else if(novel.title.toLowerCase().includes(state2.query.toLowerCase().trim())){
            return novel;
        }
    }

    return(
        <SearchHolder>
            <form>
                <input type="search" onInput={showHidden} placeholder="Search..." onChange={e=>dispatch({type: 'INPUT_QUERY', payload: e.target.value})}/>
                <button></button>
            </form>            
            
            <div id="hidden">
                {state
                    .novels
                    .filter(queryFunction)
                    .map(novel=><SearchCard novel={novel} key={novel._id}/> )}
            </div>
        </SearchHolder>
    )
}

export default Search2;