import React, { useState } from 'react';
import ModalRegistro from './modalregistro';
const ContactLink = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div>
      <ModalRegistro isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};
export default ContactLink;