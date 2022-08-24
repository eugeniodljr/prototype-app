import axios from 'axios';
import {useState} from 'react';
import { useNavigate } from 'react-router';

import UpdateNovelHolder from './styled/UpdateNovelHolder.styled';

const UpdateNovelForm = ({novel, dispatch}) => {
    const [title, setTitle] = useState(novel.title);
    const [description, setDescription] = useState(novel.description);
    const [chapters, setChapters] = useState(novel.chapters);
    const [language, setLanguage] = useState(novel.language);
    const [author, setAuthor] = useState(novel.author);
    const [year, setYear] = useState(novel.year);
    const [status_in_coo, setStatus_in_coo] = useState(novel.status_in_coo);
    const [completely_translated, setCompletely_translated] = useState(novel.completely_translated);
    const [readers, setReaders] = useState(novel.readers);
    const [image, setImage] = useState(novel.image);
    const [more_info, setMore_info] = useState(novel.more_info);
    const [read_online, setRead_online] = useState(novel.read_online);

    const navigate = useNavigate();

    const updateNovelFunction = e => {
        e.preventDefault();
        axios.put(`https://asian-novels-be.herokuapp.com/api/v1/novels/${novel._id}`, {title, description, chapters, language, author, year, status_in_coo, completely_translated, readers, image, more_info, read_online})
        .then(response=>{
            dispatch({type: 'UPDATE_NOVEL', payload: {_id: novel._id, title, description, chapters, language, author, year, status_in_coo, completely_translated, readers, image, more_info, read_online}});
            alert(`${title} has been updated!`);
            setAll();
            navigate('/');
        })
        .catch(error=>{
            dispatch({type: 'UPDATE_NOVEL_ERROR'})
        });
    }

    const setAll = () => {
        setTitle('');
        setDescription('');
        setChapters(0);
        setLanguage('');
        setAuthor('');
        setYear('');
        setStatus_in_coo('');
        setCompletely_translated('');
        setReaders('');
        setImage('');
        setMore_info('');
        setRead_online('')
    }

    return(
        <UpdateNovelHolder>
                <div id='btn-update'>
                    <button onClick={()=>navigate(-1)}></button>
                </div> 
                <h2>Update Novel</h2>
                <form>
                    <div>
                        <p>
                            <label htmlFor='title'>Novel Title:</label>
                        </p>
                        <input id='title' placeholder='---Title of Novel---' type='text' value={title} onChange={(e)=>setTitle(e.target.value)}></input>
                    </div>
                    <br/>
                    <div>
                        <p>
                            <label htmlFor='description'>Description:</label>
                        </p>
                        <textarea id='description' placeholder='---Description---' type='text' value={description} onChange={(e)=>setDescription(e.target.value)}></textarea>
                    </div>
                    <div>
                        <p>
                            <label htmlFor='language'>Set Language:</label>
                        </p>
                        <select id='language' value={language} onChange={(e)=>setLanguage(e.target.value)}>
                            <option value='Chinese'>Chinese</option>
                            <option value='Japanese'>Japanese</option>
                            <option value='Korean'>Korean</option>
                        </select>
                    </div>
                    <div>
                        <p>
                            <label htmlFor='author'>Author:</label>
                        </p>
                        <input id='author' placeholder='---Author---' type='text' value={author} onChange={(e)=>setAuthor(e.target.value)}></input>
                    </div>
                    <div>
                        <p>
                            <label htmlFor='year'>Year:</label>
                        </p>
                        <input id='year' placeholder='---Year---' type='tel' value={year} onChange={(e)=>setYear(e.target.value)}></input>
                    </div>
                    <div>
                        <p>
                            <label htmlFor='chapters'>Set Chapters:</label>
                        </p>
                        <input id='chapters' placeholder='---Chapters---' type='tel' value={chapters} onChange={(e)=>setChapters(e.target.value)}></input>
                    </div>
                    <div>
                        <p>
                            <label htmlFor='status_in_coo'>Status In COO:</label>
                        </p>
                        <select id='status_in_coo' value={status_in_coo} onChange={(e)=>setStatus_in_coo(e.target.value)}>
                            <option value='Completed'>Completed</option>
                            <option value='Ongoing'>Ongoing</option>
                            <option value='Hiatus'>Hiatus</option>
                        </select>
                    </div>
                    <div>
                        <p>
                            <label htmlFor='completely_translated'>Completely Translated?</label>
                        </p>
                        <select id='completely_translated' value={completely_translated} onChange={(e)=>setCompletely_translated(e.target.value)}>
                            <option value='Yes'>Yes</option>
                            <option value='No'>No</option>
                        </select>
                            {/* <input id='completely_translated' placeholder='---Completely Translated?---' type='text' value={completely_translated} onChange={(e)=>setCompletely_translated(e.target.value)}></input> */}
                    </div>
                    <div>
                        <p>
                            <label htmlFor='readers'>Readers:</label>
                        </p>
                        <input id='readers' placeholder='---Readers---' type='text' value={readers} onChange={(e)=>setReaders(e.target.value)}></input>
                    </div>
                    <div>
                        <p>
                            <label htmlFor='image'>Image Link:</label>
                        </p>
                        <input id='image' placeholder='---Image Link---' type='text' value={image} onChange={(e)=>setImage(e.target.value)}></input>
                    </div>
                    <br/>    
                    <div>
                        <p>
                            <label htmlFor='more_info'>More Info:</label>
                        </p>
                        <input id='more_info' placeholder='---More Info---' type='text' value={more_info} onChange={(e)=>setMore_info(e.target.value)}></input>
                    </div>
                    <br/>   
                    <div>
                        <p>
                            <label htmlFor='read_online'>Read Online:</label>
                        </p>
                        <input id='read_online' placeholder='---Read Online---' type='text' value={read_online} onChange={(e)=>setRead_online(e.target.value)}></input>
                    </div>

                    <br/><br/>    
                    <button onClick={updateNovelFunction}>Update Novel</button>
                </form>
        </UpdateNovelHolder>
    )
}

export default UpdateNovelForm;