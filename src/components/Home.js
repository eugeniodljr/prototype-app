import Card from './Card';
import Container from './styled/Container.styled';
import { useRef } from 'react';

import HomeHolder from './styled/HomeHolder.styled';
import LinkHolder from './styled/LinkHolder.styled';

const Home = ({state, dispatch, privilege}) => {

    const ref1 = useRef(null);

    const scroll1 = (scrollOffset) => {
        ref1.current.scrollLeft += scrollOffset;
    }
    
    const ref2 = useRef(null);

    const scroll2 = (scrollOffset) => {
        ref2.current.scrollLeft += scrollOffset;
    }
    
    const ref3 = useRef(null);

    const scroll3 = (scrollOffset) => {
        ref3.current.scrollLeft += scrollOffset;
    }
    
    const compareReaders = (a, b)=>{ 
        if(a.readers>b.readers) return -1;
        if(b.readers>a.readers) return 1;
    }

    return(
        <HomeHolder>
            <div className='Intro'>
                <h1>Legere Realm</h1>
                <h2>Discover Asian Fantasy Web Novels.</h2>

            </div>
            <br/><br/>
            
            <div className='cont-label'>
                <h3>
                    Readers' List
                </h3>

                <button className='btn-scroll' id='left' onClick={()=>{scroll1(-750)}}></button>
                <button className='btn-scroll' id='right' onClick={()=>{scroll1(750)}}></button>
                <LinkHolder to='/filter'>
               <h3>See all</h3>
                </LinkHolder>
            </div>

            <Container ref={ref1}>
                {state.novels
                .filter(novel=>{
                    return novel;
                })
                .sort(compareReaders)
                .map(novel=> 
                    <Card novel={novel} key={novel._id} dispatch={dispatch} privilege={state.privilege}/>
                )}
            </Container> 
            <br/><br/>

            <div className='cont-label'>
                <h3>
                    Completely Translated
                </h3>

                <button className='btn-scroll' id='left' onClick={()=>{scroll2(-750)}}></button>
                <button className='btn-scroll' id='right' onClick={()=>{scroll2(750)}}></button>
                <LinkHolder to='/filter'>
                    <h3>See all</h3>
                </LinkHolder>
            </div>

            <Container ref={ref2}>
                {state.novels
                .filter(novel=>
                    novel.completely_translated.toLowerCase()==='yes'
                )
                .map(novel=> 
                    <Card novel={novel} key={novel._id} dispatch={dispatch} privilege={state.privilege}/>
                )}
            </Container>            
            <br/><br/>

            <div className='cont-label'>
                <h3>
                    Trending
                </h3>

                <button className='btn-scroll' id='left' onClick={()=>{scroll3(-750)}}></button>
                <button className='btn-scroll' id='right' onClick={()=>{scroll3(750)}}></button>
                <LinkHolder to='/filter'>
                    <h3>See all</h3>
                </LinkHolder>
            </div>
            <Container ref={ref3}>
            {state.novels
            .filter(novel=>
                novel.completely_translated.toLowerCase()==='no'
            )            
            .map(novel=> 
                <Card novel={novel} key={novel._id} dispatch={dispatch} privilege={state.privilege}/>
            )}
            </Container>
        </HomeHolder>
    )
}

export default Home;