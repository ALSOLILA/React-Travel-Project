import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pagess/Home";
import News from "./pagess/News";
import Contact from "./pagess/Contact";
import ViewTravel from "./pagess/ViewTravel";
import Login from "./pagess/Login";
import { useState } from "react";
import { TravelContext } from "./pagess/TravelContext";
import Register from "./pagess/Register";
import ProtectedRoutes from "./services/ProtectedRoutes";
import About from "./pagess/About";

function App() {
  const [travel, setTravel] = useState([
    {id : 1,
      city : "Venezia",
      state :"Italy",
      price : 500,
      description :"Venezia, il capoluogo della regione Veneto, è adagiata su più di 100 piccole isole all'interno di una laguna nel mare Adriatico. In questa città non esistono strade ma canali, tra cui il Canal Grande, fiancheggiato da palazzi rinascimentali e gotici. Sulla piazza centrale, piazza San Marco, sorgono la Basilica di San Marco, arricchita da mosaici bizantin",
      photo :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF0LQXqP3SMLU4lX62xBGOY-_k7lrtnEttDQ&usqp=CAU"
    },

    {id : 2,
      city : "Paris",
      state :"France",
      price : 600,
      description :"Parigi, capitale della Francia, è una delle città più importanti d'Europa, centro mondiale di arte, moda, gastronomia e cultura. L'architettura urbana risalente al XIX secolo è caratterizzata dagli ampi boulevard e dalla Senna. Oltre a monumenti come la Torre Eiffel e la cattedrale gotica di Notre-Dame",
      photo :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQwQyGnCilSc4fUl1UT0yQ2PlWu6Xw8HZDEA&usqp=CAU"
    },


    {id : 3,
      city : "Barcelona",
      state :"Spain",
      price : 470,
      description :"Barcellona, la cosmopolita capitale della regione spagnola della Catalogna, è celebre soprattutto per l'arte e l'architettura. La basilica della Sagrada Família e gli altri stravaganti edifici progettati da Antoni Gaudí sono il simbolo della città. Il Museo Picasso e la Fondazione Joan Miró espongono opere d'arte dei due famosi artisti moderni.",
      photo :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgKK3I6ZA5TrfdaqTsLmrO5_fKSUg-64LdOQ&usqp=CAU"
    },
    {id : 4,
      city : "Bruxel",
      state :"Belgium",
      price : 530,
      description :"La città di Bruxelles, in italiano, desueto, anche Brusselle, è uno dei 19 comuni della regione di Bruxelles-Capitale e la capitale del Belgio, ai sensi dell'articolo 194 della costituzione belga.",
      photo :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD6KUF7MR8Qj8JYb5j6slP6GSkLVf0lSROrw&usqp=CAU"
    },
    
    {id : 5,
      city : "Budapest",
      state :"Hungary",
      price : 330,
      description :"Budapest, la capitale dell’Ungheria, è tagliata in due dal Danubio. Il Ponte delle Catene, del XIX secolo, congiunge la zona collinare di Buda a quella pianeggiante di Pest. Una funivia collega la collina del castello al centro storico di Buda, dove il Museo storico di Budapest ripercorre la storia della città a partire dall'epoca romana. ",
      photo :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCXD6RB3o4Uv2zsrohwKjJzVWbD8xtqsKB1Q&usqp=CAU"
    },
    
    {id : 6,
      city : "Amsterdam",
      state :"Netherland",
      price : 690,
      description :"Amsterdam è la capitale dei Paesi Bassi, nota per il suo patrimonio artistico, l'elaborato sistema di canali e le case strette con facciate a capanna, eredità del XVII secolo, l'epoca d'oro della città. Il Quartiere dei Musei ospita il Museo Van Gogh, il Rijksmuseum, con opere di Rembrandt e Vermeer, e il museo Stedelijk",
      photo :"https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTmTF7hszJoqrtz-UrCKQPQ0DmA7sDzRv6EExIIuNrZ-_kakebQ6R88cNlE-BEB8gK-i20Yl8lKSdn8xQ4dJQeUTpAkvQ"
    },
    
    {id : 7,
      city : "Tirana",
      state :"Albania",
      price : 250,
      description :"Tirana, la capitale dell'Albania, è nota per l'architettura colorata delle epoche ottomana, fascista e sovietica. Gli edifici color pastello circondano il punto principale della città, la piazza Scanderberg, che prende il nome dalla statua equestre di un eroe nazionale.",
      photo :"https://assets.bwbx.io/images/users/iqjWHBFdfxIU/inXcDVGw.OKQ/v1/1200x800.jpg"
    },

    {id : 7,
      city : "Pristina",
      state :"Kosovo",
      price : 250,
      description :"Pristina è la capitale del Kosovo, territorio a riconoscimento limitato dell'Europa balcanica. Con 211129 abitanti è la più grande del Paese. La popolazione dell'area metropolitana, agglomerato urbano e suburbano metropolitano, è calcolata in 465186 abitanti.",
      photo :"https://www.travelsewhere.net/wp-content/uploads/2020/05/DSC_0005-4.jpg"
    }
  ])




  return (
    <div>
      <BrowserRouter>

        
        <TravelContext.Provider value={travel}>
        <Routes>
      <Route path="/login" exact element={<Login/>}/>
      <Route path="/register" exact element={<Register/>}/>

      <Route path="/" element={<ProtectedRoutes/>}>
          <Route path="/" element={<Home/>}/>
      </Route>

    
      <Route path="/about" exact element={<About/>}/>
      <Route path="/news" exact element={<News/>}/>
      <Route path="/contact" exact element={<Contact/>}/>
      <Route path="/ViewTravel/:id" exact element={<ViewTravel/>}/>
      

        </Routes>
        </TravelContext.Provider>
      
      
      </BrowserRouter>
    </div>
  );
}

export default App;
