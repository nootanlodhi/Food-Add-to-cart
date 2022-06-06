import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import CardsDetails from './components/CardsDetails';
import Cards from './components/Cards';
import '../src/components/style.css'

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Cards/>}/>
        <Route path='/cart/:id' element={<CardsDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
