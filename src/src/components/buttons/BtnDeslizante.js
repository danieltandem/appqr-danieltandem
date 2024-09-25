import React, { useState } from 'react';
import "../buttons/buttons.css";

const BtnDeslizante = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      toggleSwitch();
    }
  };

  return (
    <div
      className="toggle-switch2"
      onClick={toggleSwitch}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
    >
      <div className={`slider2 ${isOn ? 'on' : 'off'}`}>
        <div className="circle2"></div>
      </div>
    </div>
  );
};

export default BtnDeslizante;
