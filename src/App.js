import { useState } from 'react';
import Position from './components/Position';
import Tooltip from './components/Tootip';

function App() {
  const [position, setPosition] = useState('top');

  const handlePosition = (tooltipPosition) => {
    setPosition(tooltipPosition);
  }

  return (
    <div className='wrapper'>
      <Position clickPosition={handlePosition} />
      <Tooltip position={position} />
    </div>
  );
}

export default App;
