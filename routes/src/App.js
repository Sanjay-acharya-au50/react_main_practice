import './App.css';

//  importing components
// import Header from './components/Header';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Navbar from './components/Navbar';
import Error from './components/Error';
import Facebook from './components/Facebook';
import Instagram from './components/Instagram';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <>
      <Router>

        <Navbar />

        <Routes>
        {/* home */}
          <Route path='/' element={<Home />} />

          {/* about */}
          <Route path='/about' element={<About />} />

          {/* contact */}
          <Route path='/contact' element={<Contact />} >    {/* <----- its not self closed tag */}
          {/* path '/' not required it works as active in bootstrap */}

            <Route index element={<Facebook />} />
            <Route path='facebook' element={<Facebook />} />
            <Route path='instagram' element={<Instagram />} />
          </Route>                                          {/* <----- closed here */}                                          

          {/* error */}
          <Route path='/*' element={<Error />} />


        </Routes>

      </Router>
    </>
  )
}



export default App;
