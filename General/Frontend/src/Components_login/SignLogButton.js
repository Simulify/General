import React, { useState, useEffect } from 'react';
import './SignLogButton.css';
import Loading from '../Images/Arrow-33.svg';

function SignLogButton(props) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (props.error) {
      setIsLoading(false);
    }
  }, [props.error]);

  const handleClick = () => {
    setIsLoading(true);
    props.onClick();
  };

  return (
    <button className={`SignLogButton ${isLoading ? 'loading' : ''}`} onClick={handleClick} disabled={isLoading}>
      {!isLoading && props.label}
      {isLoading && <img src={Loading} alt="Loading" className="LoadingIcon" />}
    </button>
  );
}

export default SignLogButton;
