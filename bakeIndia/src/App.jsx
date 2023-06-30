// import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Menu from './Pages/Menu';

import './App.css'

function App() {

  return (
    <>
      <div className='App'>
        <Router>
        <Navbar />
        <Routes>
            <Route exact path='/' element ={<Home />} ></Route>
            <Route exact path="/catalogue" element={<Menu />} />
            <Route exact path="/contact" element={<Contact  />} />
        </Routes>
        </Router>
       </div>
    </>
  )
}

export default App
