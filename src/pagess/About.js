import React from 'react';
import Nav from '../komponents/Nav';

function About() {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="my-4 text-center">
          <h1 className="display-4 mb-4">About Our Travel Agency</h1>
          <p className="lead mt-2">
            Welcome to our travel agency! We are passionate about providing unforgettable travel experiences and helping you create lifelong memories. Whether you're seeking a relaxing beach vacation, an adventurous mountain trek, or a cultural exploration in a vibrant city, we've got you covered.
          </p>
        </div>
        <div className="row">
          <div className="col-md-6 mb-6">
            <h2 className="mb-3">Why Choose Us?</h2>
            <ul className="list-group">
              <li className="list-group-item">Extensive selection of destinations</li>
              <li className="list-group-item">Flexible itineraries tailored to your preferences</li>
              <li className="list-group-item">Experienced travel experts to guide you</li>
              <li className="list-group-item">High-quality accommodations and services</li>
              <li className="list-group-item">Exceptional customer support throughout your journey</li>
            </ul>
          </div>
          <div className="col-md-6 mb-4">
            <h2 className="mb-3">Our Mission</h2>
            <p>
              At our travel agency, our mission is to make your travel dreams a reality. We believe that travel has the power to broaden horizons, foster connections, and create lifelong memories. That's why we are committed to providing exceptional service, personalized itineraries, and unique experiences that cater to your individual needs and interests.
            </p>
            <p>
              We strive to exceed your expectations at every step of your journey. From the moment you contact us to the time you return home, we are here to ensure that your travel experience is seamless, enjoyable, and unforgettable.
            </p>
          </div>
        </div>
      
      </div>
    </>
  );
}

export default About;
