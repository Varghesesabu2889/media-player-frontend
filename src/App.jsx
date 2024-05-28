import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Pages/Home';
import Landingpage from './Pages/Landingpage';
import Watchhistory from './Pages/Watchhistory';
import {Routes,Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Header/>

<Routes>
  <Route path='/' element={<Landingpage/>}/>
  <Route path='/home' element={ <Home/>}/>
  <Route path='/Watchhistory' element={<Watchhistory/>}/>
     
      
</Routes>

      <Footer/>
    </div>
  );
}

export default App;
