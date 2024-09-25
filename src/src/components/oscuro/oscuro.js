import React, { useState, useEffect } from 'react';
import luzIcon from '../../images/icons/luz.svg';
import lunaIcon from '../../images/icons/luna.svg';
import './oscuro.css';
const Oscuro = () => {
  const [theme, setTheme] = useState('light');
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.body.classList.add(savedTheme);
    }
  }, []);
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.classList.remove(theme);
    document.body.classList.add(newTheme);
    localStorage.setItem('theme', newTheme);
  };
  return (
    <div className="theme-switch-container">
      <label className="theme-switch">
        <input
          type="checkbox"
          onChange={toggleTheme}
          checked={theme === 'dark'}
        />
        <span className="cambia">
          <img
            src={luzIcon}
            alt="Sol"
            className={`icon-image icon-sun ${theme === 'light' ? '' : 'hidden'}`}
          />
          <img
            src={lunaIcon}
            alt="Luna"
            className={`icon-image icon-moon ${theme === 'dark' ? '' : 'hidden'}`}
          />
        </span>
      </label>
    </div>
  );
};
export default Oscuro;