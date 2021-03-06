import './App.css';
import {Home} from './pages/Home/Home';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
  <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route index path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
