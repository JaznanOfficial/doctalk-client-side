import logo from './logo.svg';
import './App.css';
import Navigation from './Components/Pages/Homepages/Navigation/Navigation';
import { Route, Routes } from 'react-router-dom';
import Homepage from './Components/Pages/Homepages/Homepage';

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Routes>
      <Route path='/' element={<Homepage></Homepage>}></Route>
      <Route path='/home' element={<Homepage></Homepage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
