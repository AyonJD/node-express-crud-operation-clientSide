import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import SingleUser from './Components/SingleUser/SingleUser';
import Users from './Components/Users/Users';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/user/add' element={<Users></Users>}></Route>
        <Route path='/user/:id' element={<SingleUser></SingleUser>}></Route>
      </Routes>
    </div>
  );
}

export default App;
