import React, { useState } from 'react';
import { Button, Checkbox, FormControlLabel, Select, MenuItem, Typography } from '@mui/material';

const RequestBuddyPage = () => {
  // State variables
  const [programMatch, setProgramMatch] = useState(false);
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [requestMade, setRequestMade] = useState(false);

  // Handle form submission (dummy function)
  const handleSubmit = (event) => {
    event.preventDefault();
    setRequestMade(true);
    setTimeout(() => {
      setRequestMade(false);
    }, 2000);
  };

  // Handle change in programMatch checkbox
  const handleProgramMatchChange = (event) => {
    setProgramMatch(event.target.checked);
  };

  // Handle change in selected courses
  const handleCoursesChange = (event) => {
    setSelectedCourses(event.target.value);
  };

  return (
    <div className="request-buddy-page">
      <Typography variant="h4" gutterBottom>
        Find a Study Buddy
      </Typography>
      <form onSubmit={handleSubmit}>
        <FormControlLabel
          control={<Checkbox checked={programMatch} onChange={handleProgramMatchChange} />}
          label="Also in Management Engineering?"
        />
        <div style={{ marginTop: '20px' }}>
          <Typography>Select Courses:</Typography>
          <Select
            multiple
            value={selectedCourses}
            onChange={handleCoursesChange}
            style={{ width: '100%' }}
          >
            <MenuItem value="MSCI 211">MSCI 211</MenuItem>
            <MenuItem value="MSCI 342">MSCI 342</MenuItem>
            <MenuItem value="MSCI 446">MSCI 446</MenuItem>
            <MenuItem value="MSCI 334">MSCI 334</MenuItem>
            <MenuItem value="MSCI 431">MSCI 431</MenuItem>
          </Select>
        </div>
        <Button type="submit" variant="contained" color="primary" style={{ marginTop: '20px' }}>
          Request Match
        </Button>
      </form>
      {requestMade && (
        <Typography variant="body1" style={{ marginTop: '20px', color: 'green' }}>
          Request Made!
        </Typography>
      )}
    </div>
  );
};

export default RequestBuddyPage;
