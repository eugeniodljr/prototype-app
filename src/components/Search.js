// import { useState } from "react";

import SearchHolder from "./styled/SearchHolder.styled";
import SearchCard from "./SearchCard";

const Search = ({state, query, setQuery}) => {

    const hide = document.getElementById('hidden');

    const showHidden = () => {
        hide.style.display='block';
    }
    
    document.addEventListener('mouseup', e=>{
        if(!hide.contains(e.target)){
            hide.style.display='none';
        }

    });

    const queryFunction = novel=>{
        if(query===''){
            return novel;
        }else if(novel.title.toLowerCase().includes(query.toLowerCase().trim())){
            return novel;
        }
    }

    return(
        <SearchHolder>
            <form>
                <input type="search" onInput={showHidden} placeholder="Search..." onChange={e=>setQuery(e.target.value)}/>
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

export default Search;