import { useParams } from "react-router";
import InfoCard from "./InfoCard";

const NovelInfo = ({state}) => {
    const {_id} = useParams();

    return(
        <div>
            {state.novels.filter(novel=>novel._id===_id).map(novel=><InfoCard novel={novel} key={novel._id}/>)}
        </div>
    )
}

export default NovelInfo;

