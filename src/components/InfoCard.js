import InfoCardHolder from "./styled/InfoCardHolder.styled";
import { useNavigate } from "react-router";

const InfoCard = ({novel}) => {
    const navigate = useNavigate();

    return(
        <InfoCardHolder>
            <div id='btn-info-card'>
                <button onClick={()=>navigate(-1)}></button>
            </div>
            <div className='main-info'>
                <div className="info-image">
                    <img src={novel.image} alt={novel.title}></img>
                </div>
                <h1>{novel.title}</h1>
            <div className='flex'>
                <p className='smaller'>{novel.chapters} Chapters</p>
            </div>
            <div className='flex'>
                <p className="smaller">Author:</p>
                <p className="smaller">{novel.author}</p>
            </div>
                <br/>
                <h3>Description</h3>
                <p className='description'>{novel.description}</p>
            </div>
            <div className='float-buttons'>
                <a href={novel.more_info} target='_blank' rel='noreferrer'>
                    <button className='more-info'>More Info</button>
                </a>
                <a href={novel.read_online} target='_blank' rel='noreferrer'>
                    <button className='read-online'>Read Online</button>
                </a>
            </div>
            <br/><br/><br/>
            <div className='flex'>
                <p>Language:</p>
                <p>{novel.language}</p>
            </div>
            <div className='flex'>
                <p>Year:</p>
                <p>{novel.year}</p>
            </div>
            <div className='flex'>
                <p>Status In COO<sup>*</sup>:</p>
                <p>{novel.status_in_coo}</p>
            </div>
            <div className='flex'>
                <p>Completely Translated:</p>
                <p>{novel.completely_translated}</p>
            </div>
            <div className='flex'>
                <p>Readers:</p>
                <p>On {novel.readers} Reading Lists<sup>**</sup></p>
            </div>

            <br/><br/><br/>
            <div className='flex'>
                <p>
                    <p><sup>*</sup>Country Of Origin</p>
                <p>
                    
                </p>                    
                    <sup>**</sup>
                    <a id='click-here' href='https://www.novelupdates.com/reading-list/' target='_blank' rel='noreferrer'>
                        Click here
                    </a>
                </p>
            </div>
        </InfoCardHolder>
    )
}

export default InfoCard;