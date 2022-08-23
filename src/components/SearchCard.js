import SearchCardHolder from "./styled/SearchCardHolder.styled";
import SearchLinkHolder from "./styled/SearchLinkHolder.styled";

const SearchCard = ({novel}) => {
    const hide = document.getElementById('hidden');

    const getHidden = () => {
        hide.style.display='none';
    }

    return(
        <SearchCardHolder>
            <SearchLinkHolder onClick={getHidden}to={`/series/${novel._id}`}>
                <img src={novel.image} alt={novel.title} title={novel.title}/>
                <span title={novel.title}>{novel.title}</span>
            </SearchLinkHolder>
        </SearchCardHolder>
    )
}

export default SearchCard;