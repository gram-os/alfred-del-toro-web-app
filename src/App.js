import './App.css';
import NavBar from './components/NavBar';
import { Route, Routes } from "react-router-dom";
import Home from './routes/Home';
import About from './routes/About'
import Achievements from './routes/Achievements'
import ItemShop from './routes/ItemShop'
import Users from './routes/Users'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/users" element={<Users/>}/>
        <Route path="/achievements" element={<Achievements/>}/>
        <Route path="/item-shop" element={<ItemShop/>}/>
      </Routes>
    </div>
  );
}

export default App;
