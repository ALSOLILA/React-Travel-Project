import React, { useContext, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { TravelContext } from './TravelContext';
import Nav from '../komponents/Nav';

function ViewProduct() {
    const {id} = useParams();
    let travel = useContext(TravelContext);
    const [traveldata,setTraveldata] = useState(null)
 

    useEffect(() => {
      setTraveldata(travel.filter(traveldata => traveldata.id == id)[0])
  }, [])

  

    return (
      <>
      <Nav/>

        <section className="view-movie py-5"> 
        
            <div className="container">
             
                {
                    traveldata && 
                    <div className="row">
                        <div className="col-5">
                            <img src={traveldata.photo} className="card-img-top" alt={traveldata.city} />
                        </div>
                        <div className="col-6 offset-1">
                            <h2 className="mb-4">{traveldata.city}</h2>
                            <p>
                                {traveldata.description}
                            </p>
                            <table className="table table-bordered my-5">
                                <tbody>
                                    <tr>
                                        <td>State</td>
                                        <td>{traveldata.state}</td>
                                    </tr>
                                    <tr>
                                        <td>City</td>
                                        <td>{traveldata.city}</td>
                                    </tr>
                                    <tr>
                                        <td>Price</td>
                                        <td>$ {traveldata.price}</td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                         
                        </div>
                    </div>
                }
            </div>
        </section>
  </>  
  )
}

export default ViewProduct