import { useState } from 'react';
import './App.css';

function App() {
  const [showOptions, setShowOptions] = useState(false);
  const [choice, setChoice] = useState('');

  const handleClick = () => {
    setShowOptions(!showOptions);
  };

  const handleOptionSelect = (option) => {
    setChoice(option);
    setShowOptions(false);
  };

  return (
    <div className="cta-container">
      <button className="cta-button" onClick={handleClick}>
        What would you like to do?
      </button>

      {showOptions && (
        <div className="options">
          {['Buy', 'Sell', 'Add to Waitlist', 'Will Come Back Later'].map((option) => (
            <button
              key={option}
              className="option-button"
              onClick={() => handleOptionSelect(option)}
            >
              {option}
            </button>
          ))}
        </div>
      )}

      {choice && <p className="message">You chose: <strong>{choice}</strong></p>}
    </div>
  );
}

export default App;
