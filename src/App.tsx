import './App.css'

// import Header from './components/Header';
import AnimRoutes from './components/AnimRoutes';

import { BrowserRouter as Router } from 'react-router-dom';

function App() {

  return (
    <>
      <Router>
        {/* <Header /> */}
        <AnimRoutes />
      </Router>
    </>
  )
}

export default App
