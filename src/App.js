
import { Routes, Route, } from "react-router-dom";
import Home from './Components/Home/Home';
import Nevbar from "./Components/Nevbar/Nevbar";
import Footer from "./Components/Footer/Footer";
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Blog from './Components/Blog/Blog';
import Contacts from './Components/Contacts/Contacts';
import Profile from './Components/Auth/Profile';

import { UserAuthContextProvider } from "./Components/Auth/UserAuthContext";
// import ProtectedRoute from "./Components/Auth/ProtectedRoute";
// import Signup from './Components/Auth/Signup';
// import Login from './Components/Auth/Login';
// import PhoneSignUp from "./Components/Auth/Phonesignup";
import './App.css';


function App() {


  return (
    <>

     

      <Nevbar />
      <UserAuthContextProvider>
        <Routes>

          <Route path="/" element={<Home />} />
          {/* <Route path="/About" element={<About />} />  */}
          <Route path="/Services" element={<Services />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Contacts" element={<Contacts />} />
          <Route path="/Profile" element={<Profile />} />
         

          {/* auth-route */}
          {/* <Route
            path="/About"
            element={
              <ProtectedRoute>
                <About />
              </ProtectedRoute>
            }
          />
          <Route path="/" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Phonesignup" element={<PhoneSignUp />} /> */}
        </Routes>
      </UserAuthContextProvider>
      <Footer />


    </>
  );
}

export default App;
