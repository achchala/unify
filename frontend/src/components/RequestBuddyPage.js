import React, { useState, useEffect } from 'react';

const RequestBuddyPage = () => {
  // State variables
  const [userId, setUserId] = useState('');
  const [programMatch, setProgramMatch] = useState(false);
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [userProgram, setUserProgram] = useState('');
  const [userCourses, setUserCourses] = useState([]);

  // Fetch user data when component mounts
  useEffect(() => {
    // Fetch user data
    fetchUserData();
  }, []);

  // Function to fetch user data from Flask backend
 // Function to fetch user data from Flask backend
const fetchUserData = () => {
  fetch('http://localhost:5000/user-data') // Update URL with your Flask backend endpoint
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }
      return response.json();
    })
    .then(data => {
      // Update state with fetched user data
      setUserId(data.userId);
      setUserProgram(data.program);
      setUserCourses(data.courses);
    })
    .catch(error => {
      console.error('Error fetching user data:', error);
    });
};

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      userId: userId,
      program: userProgram,
      programMatch: programMatch ? 1 : 0,
      courses: selectedCourses,
    };

    fetch('http://localhost:5000/submit-request', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to submit request');
      }
      return response.json();
    })
    .then(responseData => {
      // Handle successful request submission
      console.log('Request submitted successfully:', responseData);
      // Clear form fields
      setProgramMatch(false);
      setSelectedCourses([]);
    })
    .catch(error => {
      console.error('Request submission error:', error);
    });
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
        {userProgram && (
          <div>
            <label>
              Also in {userProgram}?{' '}
              <input
                type="checkbox"
                checked={programMatch}
                onChange={handleProgramMatchChange}
              />
            </label>
            <p>Your Program: {userProgram}</p>
          </div>
        )}
        {userCourses.length > 0 && (
          <div>
            <label>Select Courses:</label>
            <select multiple value={selectedCourses} onChange={handleCoursesChange}>
              {userCourses.map(course => (
                <option key={course} value={course}>{course}</option>
              ))}
            </select>
          </div>
        )}
        <button type="submit">Request Match</button>
      </form>
    </div>
  );
  
};

export default RequestBuddyPage;
