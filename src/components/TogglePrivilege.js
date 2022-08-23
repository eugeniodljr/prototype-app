import { useRef } from "react";
import ToggleHolder from "./styled/ToggleHolder.styled";


const TogglePrivilege = ({privilege, setPrivilege}) => {
    const ref = useRef(null);
    const changeButtonColor = () => {
        setPrivilege(!privilege);

        if(!privilege){
            ref.current.style.background="#99C1F1";
        }else{
            ref.current.style.background="#8FF0A4";
        }
    }

    return(
        <ToggleHolder>
            <button onClick={changeButtonColor} ref={ref}>{(privilege) ? "ADMIN" : "USER"}</button>
        </ToggleHolder>
    )
}

export default TogglePrivilege;