import './App.css';

//  importing components
// import Header from './components/Header';
import Users from './components/Users';


// import Navbar from './components/Navbar';



import UserDetails from './components/UserDetails';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <>
      <Router>



        <Routes>
          <Route path="users" element={<Users />}>
            <Route path=":userId" element={<UserDetails />} />
          </Route>

        </Routes>

      </Router>
    </>
  )
}



export default App;
