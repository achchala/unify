// RequestBuddyButton.js
import React, { useState } from 'react';
import Modal from './Modal'; // Implement Modal component

const RequestBuddyButton = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <>
      <button onClick={openModal}>Find a Study Buddy</button>
      {showModal && <Modal onClose={closeModal} />}
    </>
  );
};

export default RequestBuddyButton;
