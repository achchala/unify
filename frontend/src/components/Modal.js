// Modal.js
import React from 'react';

const Modal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {/* Form for creating request */}
        <form onSubmit={handleSubmit}>
          {/* Program select input */}
          <label htmlFor="program">Program:</label>
          <select id="program" name="program">
            {/* Options for programs */}
          </select>

          {/* Multiselect dropdown for courses */}
          <label htmlFor="courses">Courses:</label>
          <select id="courses" name="courses" multiple>
            {/* Options for courses */}
          </select>

          {/* Gender input */}
          <label htmlFor="gender">Gender:</label>
          <input type="text" id="gender" name="gender" />

          <button type="submit">Submit</button>
        </form>
        {/* Close button */}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
