import CardHolder from './styled/CardHolder.styled';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {confirmAlert} from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const Card = ({novel, dispatch, privilege}) => {

    const navigate = useNavigate();

    const editFunction = () => {
        dispatch({type: 'TO_UPDATE_NOVEL', payload: {_id: novel._id}})
        navigate('/update-novel');
    }

    const deleteFunction = () => {
        axios.delete(`https://asian-novels-app-be.herokuapp.com/api/v1/novels/${novel._id}`)
        .then(response=>{
            dispatch({type: 'DELETE_NOVEL', payload: {_id: novel._id}});
            alert(`${novel.title} has been deleted!`);
        })
        .catch(error=>{
            dispatch({type: 'DELETE_NOVEL_ERROR'})
        });
    }

    const confirmDelete = () => {
        confirmAlert({
            title: 'Confirm Delete',
            message: 'Are you sure you want to delete this?',
            buttons: [
                {
                    label: 'No',
                    onClick: ()=>alert('Delete Cancelled')
                },
                {
                    label: 'Yes',
                    onClick: ()=>deleteFunction()
                }
            ]
        })
    }

    return(
        <CardHolder>
            <Link to={`/series/${novel._id}`}>
                <img src={novel.image} alt={novel.title} title={novel.title}/>
            </Link>
            <div className='both-container'>
                <div id='card-title'>
                    <span title={novel.title}>{novel.title}</span>
                </div>
                <div className='btn-container'>
                    {(privilege===true) && <button id='btn-update' className='btn' onClick={()=>editFunction()}></button>}
                    {(privilege===true) && <button id='btn-delete' className='btn' onClick={()=>confirmDelete()}></button>}
                </div>        
            </div>
        </CardHolder>            
    )
}

export default Card;