import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home'
import Register from './components/Register/Register'
import Success from './components/Register/Success'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register/success" element={<Success />} />
      </Routes >
    </Router>
  )
}

export default App
