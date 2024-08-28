import React, { useState } from 'react';
import "../buttons/buttons.css"
const BtnDeslizante = () => {
  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => {
    setIsOn(!isOn);
  };
  return (
    <div className="toggle-switch2" onClick={toggleSwitch}>
      <div className={`slider2 ${isOn ? 'on' : 'off'}`}>
        <div className="circle2"></div>
      </div>
    </div>
  );
};
export default BtnDeslizante;