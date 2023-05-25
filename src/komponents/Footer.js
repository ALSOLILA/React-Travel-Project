import React from 'react';

function Footer() {
  return (
    <footer className="bg-light text-dark">
      <div className="container py-4">
        <div className="row">
          <div className="col-6">
            <h5>Travel with Us</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in ligula
              hendrerit, facilisis neque a, fringilla turpis.
            </p>
          </div>
          <div className="col-lg-2">
            <h5>Parters</h5>
            <ul className="list-unstyled">
              <li><a href="/">Booking</a></li>
              <li><a href="/about">Rental Car </a></li>
              <li><a href="/services">Hostel World</a></li>
              <li><a href="/contact">Trivago</a></li>
              <li><a href="/contact">TripAdviser</a></li>
            </ul>
          </div>
          <div className="col-lg-2">
            <h5>Last Minute</h5>
            <ul className="list-unstyled">
              <li><a href="/">London</a></li>
              <li><a href="/about">California</a></li>
              <li><a href="/services">Brussel</a></li>
              <li><a href="/contact">Rome</a></li>
              <li><a href="/contact">Berlin</a></li>
            </ul>
          </div>

          <div className="col-2">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>123 Street, City</li>
              <li>info@example.com</li>
              <li>123-456-7890</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-secondary text-center py-2">
        <p className="mb-0">© 2023 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
