import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import Advertise from './pages/Advertise'
import ContactUs from "./pages/ContactUs"
import ErrorPage from "./pages/ErrorPage"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/advertise' element={<Advertise />} />
          <Route exact path='/contactus' element={<ContactUs />} />
          <Route exact path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
