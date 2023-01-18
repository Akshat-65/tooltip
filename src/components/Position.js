import './Position.css';
const Position = (props) => {
    const changePosition = (e) => {
        props.clickPosition(e.target.value);
    }

    return (
        <div className='position-change-container'>
            <p className='position-text'>Want to change the position of tooltip? Click on the desired position button.</p>
            <button className='position-change-button' value="top" onClick={changePosition}>Top</button>
            <button className='position-change-button' value="bottom" onClick={changePosition}>Bottom</button>
            <button className='position-change-button' value="left" onClick={changePosition}>Left</button>
            <button className='position-change-button' value="right" onClick={changePosition}>Right</button>
        </div>
    );
}

export default Position;