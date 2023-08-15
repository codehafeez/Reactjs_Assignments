import React, { useState } from 'react';
import './App.css'; // Add custom styles in App.css

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Simple validation: Check if name, email, and phone are filled
    if (name && email && phone) {
      // Display success alert
      alert('Form submitted successfully!');
      // Reset form values
      setName('');
      setEmail('');
      setPhone('');
      setIsSubmitted(true);
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div className="App">
      <h1>Form Handling Example</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={handlePhoneChange}
            placeholder="Enter your phone"
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {isSubmitted && <p className="success-message">Form submitted successfully!</p>}
    </div>
  );
}

export default App;
