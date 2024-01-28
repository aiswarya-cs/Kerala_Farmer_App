import Header from './Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Headertwo from './Header2/Headertwo';
import Banner from './Banner/Banner';
import About from './About/About';
import Instructions from './Instructions/Instructions';
import Member from './OurTeam/Member';
import Footer from './Footer/Footer';
import {BrowserRouter, Router, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
        <Header/>
        <Banner/>
         <About/>
        <Instructions/>
        <Member/>
         <Footer/>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
