import { useState } from "react";
import "./collapse.scss";
import fleche from "../../assets/fleche.svg";

function Collapse({ titre, description, className1, className2 }) {
    const [visible, setVisible] = useState(false);

    const openCollapse = () => {
        setVisible(!visible);
    };

    return (
        <div className={className1}>
            <div className={className2}>
                <div className="collapse__title">{titre}</div>
                <img onClick={openCollapse} src={fleche} alt="Ouvrir cette liste" className={`collapse__img ${visible ? "true" : ""}`} />
            </div>

            <div className={`collapse__box ${visible ? "true" : "false"}`}> {description}</div>
        </div>
    );
}

export default Collapse;
