import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Users from './Components/Users/Users';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/user/add' element={<Users></Users>}></Route>
      </Routes>
    </div>
  );
}

export default App;
