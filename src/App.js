import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AddDestination from './components/AddDestination';
import Details from './components/Details';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/addDestination' element={<AddDestination />} />
        <Route path='/destinationDetails/:id' element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
