import React, { useState } from 'react';

function Subscribe() {
  const [subscribe, setSubscribe] = useState('');

  const handleInputChange = (e) => {
    setSubscribe(e.target.value);
  };

  const handleSubscribe = () => {
    if (subscribe) {
      localStorage.setItem('Subscribe_email', subscribe);
      alert('You have subscribed successfully');
      setSubscribe('');
    } else {
      alert('Please enter your email address');
    }
  };

  return (
    <div className="subscribe">
      <h3 className="subscribe-title">Subscribe to Our Newsletter</h3>
      <div className="subscribe-form">
        <input
          value={subscribe}
          name="email"
          type="email"
          placeholder="Enter your Email Address"
          className="subscribe-input"
          onChange={handleInputChange}
        />
        <button className="subscribe-button" onClick={handleSubscribe}>
          Subscribe
        </button>
      </div>
    </div>
  );
}

export default Subscribe;
