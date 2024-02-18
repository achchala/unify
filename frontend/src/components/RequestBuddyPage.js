import React, { useState } from 'react';

const RequestBuddyPage = () => {
  // State variables
  const [programMatch, setProgramMatch] = useState(false);
  const [selectedCourses, setSelectedCourses] = useState([]);

  // Handle form submission (dummy function)
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted');
  };

  // Handle change in programMatch checkbox
  const handleProgramMatchChange = (event) => {
    setProgramMatch(event.target.checked);
  };

  // Handle change in selected courses
  const handleCoursesChange = (event) => {
    setSelectedCourses(Array.from(event.target.selectedOptions, option => option.value));
  };

  return (
    <div className="request-buddy-page">
      <h1>Find a Study Buddy</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Also in Management Engineering?{' '}
            <input
              type="checkbox"
              checked={programMatch}
              onChange={handleProgramMatchChange}
            />
          </label>
        </div>
        <div>
          <label>Select Courses:</label>
          <select multiple value={selectedCourses} onChange={handleCoursesChange}>
            <option value="MSCI 211">MSCI 211</option>
            <option value="MSCI 342">MSCI 342</option>
            <option value="MSCI 446">MSCI 446</option>
            <option value="MSCI 334">MSCI 334</option>
            <option value="MSCI 431">MSCI 431</option>
          </select>
        </div>
        <button type="submit">Request Match</button>
      </form>
    </div>
  );
};

export default RequestBuddyPage;
