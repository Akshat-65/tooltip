import { useState } from 'react';
import './Tooltip.css';
const Tooltip = (props) => {

    const [showTooltip, setShowTooltip] = useState(false);
    const position = props.position;

    const handleMouseEnter = () => {
        setShowTooltip(true);
    }

    const handleMouseLeave = () => {
        setShowTooltip(false);
    }

    return (
        <div className="container">
            <button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="button">Hover over me</button>
            {showTooltip && <div className={`tooltip ${position}`}>
                <div className="tooltip-arrow"></div>
                <div className="tooltip-label">Hii! I am a tooltip</div>
            </div>}
        </div>
    )
}
export default Tooltip;