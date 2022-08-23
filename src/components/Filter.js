import { useState } from "react";

import Card from "./Card";
import FilterHolder from "./styled/FilterHolder.styled";
import FilterOptionsHolder from "./styled/FilterOptionsHolder.styled";

const Filter = ({state, privilege, dispatch}) => {
    const [language, setLanguage] = useState('All');
    const [status_in_coo, setStatus_in_coo] = useState('All');
    const [completely_translated, setCompletely_translated] = useState('All');
    const [readers, setReaders] = useState('None');
    const [chapters, setChapters] = useState('None');
    const [year, setYear] = useState('None');

    const compareReaders = (a,b)=>{
        if(readers==='None'){
            return;
        }else if(readers==='Ascending'){
            if(a.readers>b.readers) return 1;
            if(b.readers>a.readers) return -1;
        }else if(readers==='Descending'){
            if(a.readers>b.readers) return -1;
            if(b.readers>a.readers) return 1;
        }else{
            return;
        }
    }

    const compareChapters = (a,b)=>{
        if(chapters==='None'){
            return;
        }else if(chapters==='Ascending'){
            if(a.chapters>b.chapters) return 1;
            if(b.chapters>a.chapters) return -1;
        }else if(chapters==='Descending'){
            if(a.chapters>b.chapters) return -1;
            if(b.chapters>a.chapters) return 1;
        }else{
            return;
        }
    }

    const compareYear = (a,b)=>{
        if(year==='None'){
            return;
        }else if(year==='Newest'){
            if(a.year>b.year) return -1;
            if(b.year>a.year) return 1;
        }else if(year==='Oldest'){
            if(a.year>b.year) return 1;
            if(b.year>a.year) return -1;
        }else{
            return;
        }
    }
    
    return(
        <div>
            <FilterOptionsHolder>
                {/* Language */}
                <div className="filter-option">
                    <p>
                        <label htmlFor='language'>Language:</label>
                    </p>
                    <select id='language' value={language} onChange={(e)=>setLanguage(e.target.value)}>
                        <option value='All'>All</option>
                        <option value='Chinese'>Chinese</option>
                        <option value='Japanese'>Japanese</option>
                        <option value='Korean'>Korean</option>
                    </select>
                    <br/><br/>
                </div>
                {/* Status */}
                <div className="filter-option">
                    <p>
                        <label htmlFor='status_in_coo'>Status:</label>
                    </p>
                    <select id='status_in_coo' value={status_in_coo} onChange={(e)=>setStatus_in_coo(e.target.value)}>
                        <option value='All'>All</option>
                        <option value='Completed'>Completed</option>
                        <option value='Ongoing'>Ongoing</option>
                        <option value='Hiatus'>Hiatus</option>
                        <option value='Dropped'>Dropped</option>
                    </select>
                </div>
                {/* Completely Translated */}
                <div className="filter-option">
                    <p>
                        <label htmlFor='completely_translated'>Translation:</label>
                    </p>
                    <select id='completely_translated' value={completely_translated} onChange={(e)=>setCompletely_translated(e.target.value)}>
                        <option value='All'>All</option>
                        <option value='Yes'>Complete</option>
                        <option value='No'>Incomplete</option>
                    </select>
                </div>
                {/* Readers */}
                <div className="filter-option">
                    <p>
                        <label htmlFor='readers'>Readers:</label>
                    </p>
                    <select id='readers' value={readers} onChange={(e)=>setReaders(e.target.value)}>
                        <option value='None'>None</option>
                        <option value='Descending'>Descending</option>
                        <option value='Ascending'>Ascending</option>
                    </select>
                </div>
                {/* Chapters */}
                <div className="filter-option">
                    <p>
                        <label htmlFor='chapters'>Chapters:</label>
                    </p>
                    <select id='chapters' value={chapters} onChange={(e)=>setChapters(e.target.value)}>
                        <option value='None'>None</option>
                        <option value='Descending'>Descending</option>
                        <option value='Ascending'>Ascending</option>
                    </select>
                </div>
                {/* Year */}
                <div className="filter-option">
                    <p>
                        <label htmlFor='year'>Year:</label>
                    </p>
                    <select id='year' value={year} onChange={(e)=>setYear(e.target.value)}>
                        <option value='None'>None</option>
                        <option value='Newest'>Newest</option>
                        <option value='Oldest'>Oldest</option>
                    </select>
                </div>

            </FilterOptionsHolder>
            <FilterHolder>
                {state.novels
                .filter(novel=>{
                    if(language==='All'){
                        return novel;
                    }else{
                        return novel.language===language;
                    }
                })
                .filter(novel=>{
                    if(status_in_coo==='All'){
                        return novel;
                    }else{
                        return novel.status_in_coo===status_in_coo;
                    }
                })
                .filter(novel=>{
                    if(completely_translated==='All'){
                        return novel;
                    }else{
                        return novel.completely_translated===completely_translated;
                    }
                })
                .sort(compareReaders)
                .sort(compareChapters)
                .sort(compareYear)
                .map(novel=><Card novel={novel} key={novel._id} privilege={state.privilege} dispatch={dispatch}/>)}
            </FilterHolder>

        </div>
    )
}

export default Filter;