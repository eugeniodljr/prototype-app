import {useState} from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';

import AddNovelHolder from './styled/AddNovelHolder.styled';

const AddNovelForm = ({state, dispatch}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [chapters, setChapters] = useState();
    const [language, setLanguage] = useState('Chinese');
    const [author, setAuthor] = useState('');
    const [year, setYear] = useState('');
    const [status_in_coo, setStatus_in_coo] = useState('Ongoing');
    const [completely_translated, setCompletely_translated] = useState('No');
    const [readers, setReaders] = useState('');
    const [image, setImage] = useState('');
    const [more_info, setMore_info] = useState('');
    const [read_online, setRead_online] = useState('');

    const navigate = useNavigate();

    const addNovelFunction = e => {
        e.preventDefault();
        alert(`${title} has been added!`);
        axios.post('https://asian-novels-app-be.herokuapp.com/api/v1/novels', {title, description, chapters, language, author, year, status_in_coo, completely_translated, readers, image, more_info, read_online})
            .then(response=>{
                dispatch({type:'ADD_NOVEL', payload: {...response.data}})
            })
            .catch(error=>{
                dispatch({type: 'ADD_NOVEL_ERROR'})
            });
        setAll();
        navigate('/');
    }

    const setAll = () => {
        setTitle('');
        setDescription('');
        setChapters('');
        setLanguage('Chinese');
        setAuthor('');
        setYear('');
        setStatus_in_coo('Ongoing');
        setCompletely_translated('No');
        setReaders('No');
        setImage('');
        setMore_info('');
        setRead_online('');
    }

    return(
        <AddNovelHolder>
            <div id='btn-add'>
                <button onClick={()=>navigate(-1)}></button>
            </div>    
            <div>
                <h2>Add Novel</h2>
                <form>
                    <div>
                        <input placeholder='---Title of Novel---' type='text' value={title} onChange={(e)=>{
                            if(state.novels.find(novel=>novel.title===e.target.value)){
                                alert('Novel title already exists');
                            }else{
                                setTitle(e.target.value);
                            }
                        }}></input>
                    </div>
                    <br/>
                    <div>
                        <textarea placeholder='---Description---' type='text' value={description} onChange={(e)=>setDescription(e.target.value)}></textarea>
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
                        <br/><br/>
                    </div>
                    <div>
                        {/* <label htmlFor='author'>Author</label> */}
                        {/* <br/>    */}
                        <input id='author' placeholder='---Author---' type='text' value={author} onChange={(e)=>setAuthor(e.target.value)}></input>
                        <br/>
                    </div>
                    <div>
                        {/* <label htmlFor='year'>Year:</label> */}
                        {/* <br/> */}
                        <input id='year' placeholder='---Year---' type='tel' value={year} onChange={(e)=>setYear(e.target.value)}></input>
                    </div>
                    <div>
                        {/* <p>
                            <label htmlFor='chapters'>Set Chapters:</label>
                        </p> */}
                        <input id='chapters' placeholder='---Chapters---' type='tel' value={chapters} onChange={(e)=>setChapters(e.target.value)}></input>
                    </div>
                    <br/>
                    <div>
                        <p>
                            <label htmlFor='status_in_coo'>Status In COO:</label>
                        </p>
                        <select id='status_in_coo' value={status_in_coo} onChange={(e)=>setStatus_in_coo(e.target.value)}>
                            <option value='Completed'>Completed</option>
                            <option value='Ongoing'>Ongoing</option>
                            <option value='Hiatus'>Hiatus</option>
                            <option value='Dropped'>Dropped</option>
                        </select>
                    </div>
                    <br/>
                    <div>
                        <p>
                            <label htmlFor='completely_translated'>Completely Translated?</label>
                        </p>
                        <select id='completely_translated' value={completely_translated} onChange={(e)=>setCompletely_translated(e.target.value)}>
                            <option value='Yes'>Yes</option>
                            <option value='No'>No</option>
                        </select>
                    </div>
                    <br/>
                    <div>
                        <input placeholder='---Readers---' type='text' value={readers} onChange={(e)=>setReaders(e.target.value)}></input>
                    </div>
                    <br/>
                    <div>
                        <input placeholder='---Image Link---' type='text' value={image} onChange={(e)=>setImage(e.target.value)}></input>
                    </div>
                    <br/>
                    <div>
                        <input placeholder='---More Info---' type='text' value={more_info} onChange={(e)=>setMore_info(e.target.value)}></input>
                    </div>
                    <br/>
                    <div>
                        <input placeholder='---Read Online---' type='text' value={read_online} onChange={(e)=>setRead_online(e.target.value)}></input>
                    </div>
                    <br/>

                    <button onClick={addNovelFunction}>Add Novel</button>
                </form>
            </div>
        </AddNovelHolder>
    )
}

export default AddNovelForm;