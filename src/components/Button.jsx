import React, {useState}from 'react';

function Button({ text}) {
    const [counter, setCount] = useState(0);

    const incrementCount = () => {
    setCount(counter + 1);
    };
  return (
    <div className="lab-2-container">
        <p>Счетчик: {counter}</p>
        <button className={'button'} onClick={incrementCount}>
            {text}
        </button>
    </div>
  );
}

export default Button;