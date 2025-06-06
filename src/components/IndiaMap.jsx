import World from "@react-map/india";
import "./css/IndiaMap.css"
import { useNavigate } from "react-router-dom";

function IndiaMap() {
    const a = useNavigate();
    const redirect = (sc) => {
        a(`${sc}`);
    };
    return (
        <>
            <div className="indiamap">
                <World onSelect={redirect} hoverColor="orange" type='select-single' />
            </div>
        </>
    )
}
export default IndiaMap;
