import {Routes, Route} from 'react-router-dom';
import { useReducer, useEffect, useState} from 'react';
import axios from 'axios';
import AppHolder from './components/styled/AppHolder.styled';

import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import About from './components/About';
import Contact from './components/Contact';
import Terms from './components/Terms';
import Privacy from './components/Privacy';
import AddNovelForm from './components/AddNovelForm';
import UpdateNovelForm from './components/UpdateNovelForm';
import NovelInfo from './components/NovelInfo';
import Filter from './components/Filter';
// import Search from './components/Search';
// import TogglePrivilege from './components/TogglePrivilege';
import TogglePrivilege2 from './components/TogglePrivilege2';
import Search2 from './components/Search2';

const initialState = {
    novels: [],
    toUpdateNovel: null,
    error: '',
    privilege: false

}

const reducer = (state, action) => {
    switch(action.type){
        case 'FETCH_SUCCESS':
            return{
                novels: action.payload,
                toUpdateNovel: null,
                error: ''
            };

        case 'FETCH_ERROR':
            return{
                novels: [],
                toUpdateNovel: null,
                error: 'Error in fetching data...'
            };

        case 'ADD_NOVEL':
            return {
                ...state,
                 novels: [...state.novels, action.payload]
            };

        case 'ADD_NOVEL_ERROR':
            return{
                error: 'Error in adding novel...'
            };

        case 'DELETE_NOVEL':
            return {...state, novels: state.novels.filter(novel=>novel._id!==action.payload._id)};

        case 'DELETE_NOVEL_ERROR':
            return{
                error: 'Error in deleting novel...'
            };

        case 'TO_UPDATE_NOVEL':
            return {...state, toUpdateNovel: state.novels.find(novel=>novel._id===action.payload._id)};

        case 'UPDATE_NOVEL':

            const index = state.novels.findIndex(novel=>novel._id===action.payload._id);
            const newNovels = state.novels.filter(novel=>novel._id!==action.payload._id);

            newNovels.splice(index, 0, action.payload);

            return {...state, novels: newNovels, toUpdateNovel: null};
        
        case 'UPDATE_NOVEL_ERROR':
            return{
                error: 'Error in updating novel...'
            };

        case 'SET_PRIVILEGE':
            return {...state, privilege: !state.privilege}; 

        default:
            return;
    }
}

const App = () => {

    const [state, dispatch] = useReducer(reducer, initialState);
    // const [query, setQuery] = useState('');
    
    useEffect(()=>{
        axios.get('https://asian-novels-app-be.herokuapp.com/api/v1/novels')
        .then(response=>{
            dispatch({type: 'FETCH_SUCCESS', payload: response.data})
        })
        .catch(error=>{
            dispatch({type: 'FETCH_ERROR'})
        })
    },[]);

    return(
        <AppHolder>
            <Header state={state} privilege={state.privilege}/>
            {/* <Search state={state} query={query} setQuery={setQuery}/> */}
            <Search2 state={state} dispatch={dispatch}/>
            {/* <TogglePrivilege privilege={privilege} setPrivilege={setPrivilege}/> */}
            <TogglePrivilege2 privilege={state.privilege} dispatch={dispatch}/>

            <Routes>
                <Route path='/' element={<Home state={state} dispatch={dispatch} privilege={state.privilege}/>}></Route>
                <Route path='/add-novel' element={<AddNovelForm state={state} dispatch={dispatch}/>}></Route>
                <Route path='/update-novel' element={state.toUpdateNovel && <UpdateNovelForm novel={state.toUpdateNovel} dispatch={dispatch}/>}></Route>
                <Route path='/series/:_id' element={<NovelInfo state={state}/>}></Route>
                <Route path='/filter' element={<Filter state={state} privilege={state.privilege}/>}></Route>
                <Route path='/contact' element={<Contact/>}></Route>
                <Route path='/about' element={<About/>}></Route>                
                <Route path='/terms' element={<Terms/>}></Route>
                <Route path='/privacy' element={<Privacy/>}></Route>
            </Routes>

            <Footer/>
        </AppHolder>
    )
}

export default App;