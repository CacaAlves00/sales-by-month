import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Selects from './components/Selects/Selects';
import Chart from './components/Chart/Chart';

function App() {

  const [selectedBrand, setSelectedBrand] = useState('')

  return (
    <div className='App'>
      <Header />
      <Selects selectedBrand={selectedBrand} setSelectedBrand={setSelectedBrand} />
      <Chart selectedBrand={selectedBrand} />
    </div>
  );
}

export default App;
