
import NavBar from './Components/NavBar'
import Home from './Pages/Home';
import Tour from './Pages/Tour';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        
        <Routes>  
          <Route path='/' element={<Home />} />
          <Route path='/:id' element={<Tour />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
