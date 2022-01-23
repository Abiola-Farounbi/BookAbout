import './App.css';
import {Home} from './pages/Home/Home';
import {SignIn} from "./pages/Register/Register";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
  <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route index path='/register' element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
