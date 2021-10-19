import React,{ Component } from 'react';
import './App.css';
import Nvbar from './Components/Nvbar/Nvbar';
import NvCarousel from './Components/NvCarousel/NvCarousel';
import Footer from './Components/Footer/Footer';
import Platillos from './Components/Platillos/Platillos';
import MenuQr from './Components/MenuQr/MenuQr';


class App extends Component{
  
  render () {
    return (
      <div className="App">
        
        <div id="/home">
          <Nvbar />
          <NvCarousel />
          <Footer />
        </div>
        <div id="/platillo">
          <Nvbar />
          <Platillos />
          <Footer />
        </div>
        <div id="/menu">
          <MenuQr />
        </div>
        
        
     
        
        
        
        
        </div>
    )
  }
}

export default App;
