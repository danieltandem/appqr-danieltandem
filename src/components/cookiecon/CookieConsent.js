// src/components/CookieConsent.js
import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import './CookieConsent.css';

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = Cookies.get('cookie-consent');
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    Cookies.set('cookie-consent', 'accepted', { expires: 365 });
    setVisible(false);
  };

  return (
    visible && (
      <div className="cookie-consent">
        <p>
          Este sitio web utiliza cookies para mejorar su experiencia. Ignore este mensaje si prefiere no aceptar su uso o pinche en "aceptar". 
          <a href="/cookies" target='_blank'>Leer más</a>
        </p>
        <button onClick={handleAccept}>Aceptar</button>
      </div>
    )
  );
};

export default CookieConsent;