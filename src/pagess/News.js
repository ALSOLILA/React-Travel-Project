import React from 'react';
import Nav from '../komponents/Nav';

function News() {
  return (
  <>
<Nav/>
    <div className="container">
      
      <h1 className="my-4">Travel Agency News</h1>

      <div className="card mb-4">
        <img src="https://media.cnn.com/api/v1/images/stellar/prod/200924183413-dubai-9-1.jpg?q=w_1350,h_900,x_125,y_0,c_crop" className="card-img-top" alt="News" />
        <div className="card-body">
          <h5 className="card-title">Exciting New Destination Announcement</h5>
          <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam enim nec felis fermentum, in ullamcorper dolor bibendum. Donec vitae consequat tortor, eget auctor erat.</p>
          <a href="#" className="btn btn-primary">Read More</a>
        </div>
      </div>

      <div className="card mb-4">
        <img src="https://i.pinimg.com/736x/f6/6c/57/f66c57d87736bd6cb64f121f2fe4db15--cancun-vacation-deals-vacations.jpg" className="card-img-top" alt="News" />
        <div className="card-body">
          <h5 className="card-title">Exclusive Vacation Packages</h5>
          <p className="card-text">Vestibulum pharetra lobortis sem, et vestibulum turpis efficitur at. Duis vitae enim augue. Fusce nec quam eu elit laoreet rhoncus a in neque.</p>
          <a href="#" className="btn btn-primary">Read More</a>
        </div>
      </div>



    </div>
    </>
  );
}

export default News;
