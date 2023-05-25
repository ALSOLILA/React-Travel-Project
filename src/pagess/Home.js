import React, { useContext} from 'react'
import { TravelContext } from './TravelContext';
import Nav from '../komponents/Nav';
import TravelCard from '../komponents/TravelCard';
import Footer from '../komponents/Footer';
import Subscribe from '../komponents/Subscribe';


function Home() {
  let travel = useContext(TravelContext)

  return (
    <>
<Nav/>

<section  id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://a.cdn-hotels.com/gdcs/production40/d811/5e89ad90-8f10-11e8-b6b0-0242ac110007.jpg?impolicy=fcrop&w=800&h=533&q=medium" className="d-block w-100" alt="Rome"/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Rome</h5>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://secretldn.com/wp-content/uploads/2022/01/shutterstock_533946907-2.jpg" className="d-block w-100" alt="London"/>
      <div className="carousel-caption d-none d-md-block">
        <h5>London</h5>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://cdn.getyourguide.com/img/location/e7cd5b184985f010.jpeg/75.jpg" className="d-block w-100" alt="Berlin" />
      <div className="carousel-caption d-none d-md-block">
        <h5>Berlin</h5>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</section>
 

<section className="products">
      <div className="container py-5">
        <h2 className="mb-5 text-center">Our Package</h2>
        <div className="row">
          {travel && travel.map(trav => (
            <div key={trav.id} className="col-3">
              <TravelCard trav={trav} />
            </div>
          ))}
        </div>
      </div>
    </section>


    <Subscribe/> 
    <Footer/>

    </>
  )
}

export default Home