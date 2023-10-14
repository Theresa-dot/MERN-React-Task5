import React, { useState } from 'react';

const AgeCalculator = () => {
  const [dob, setDob] = useState('');
  const [age, setAge] = useState(0);

  const calculateAge = () => {
    const dateParts = dob.split('/'); // Split the input by /
    
    if (dateParts.length === 3) {
      const day = parseInt(dateParts[0], 10);
      const month = parseInt(dateParts[1], 10);
      const year = parseInt(dateParts[2], 10);

      if (!isNaN(day) && !isNaN(month) && !isNaN(year)) {
        const birthDate = new Date(year, month - 1, day); // Months are zero-based
        const currentDate = new Date();
        const ageInMilliseconds = currentDate - birthDate;
        const ageInYears = Math.floor(ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000));
        setAge(ageInYears);
        return;
      }
    }

    // Handle invalid date input
    alert('Please enter a valid date of birth (dd/mm/yyyy).');
  };

  return (
    <div className="age-calculator">
      <h1>Age Calculator</h1>
      <h2>Enter Your Date of Birth</h2>
      <input
        type="text"
        placeholder="dd/mm/yyyy"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
      />
      <button onClick={calculateAge} style={{ backgroundColor: 'blue', color: 'white' }}>
        Calculate Age
      </button>
      {age !== null && <p>You are {age} years old.</p>}
    </div>
  );
};

export default AgeCalculator;
