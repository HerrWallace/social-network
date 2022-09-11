import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Header } from './Components/Header/Header';
import { Profile } from './Components/Profile/Profile/Profile';
import { Navigation } from './Components/Navigation/Navigation';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <div className='App_noWrap'>
        <Navigation />

        <Routes>
          <Route path='/profile/*' element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
