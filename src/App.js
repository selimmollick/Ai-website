
import { Routes, Route, } from "react-router-dom";
import Home from './Components/Home/Home';
import Nevbar from "./Components/Nevbar/Nevbar";
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Blog from './Components/Blog/Blog';
import Contacts from './Components/Contacts/Contacts';

import './App.css';


function App() {
 

  return (
    <>
    <Nevbar/>
    
    
    <Routes>
        {/* <Route path="/" element={<Navbar />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} /> 
        <Route path="/Services" element={<Services />} />
        <Route path="/Blog" element={<Blog />} />  
        <Route path="/Contacts" element={<Contacts />} />            
      </Routes>

    </>
  );
}

export default App;
