import React,{ Component } from 'react';
import './App.css';
import Nvbar from './Components/Nvbar/Nvbar';
import NvCarousel from './Components/NvCarousel/NvCarousel';
import Footer from './Components/Footer/Footer';
import Platillos from './Components/Platillos/Platillos';
import MenuQr from './Components/MenuQr/MenuQr';
import {BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component{
  
  render () {
    return (
      <div className="App">
        <BrowserRouter>
        <Nvbar />
      <Switch>
        <Route exact path='/' > <NvCarousel /> </Route>
        <Route  path='/home'> <NvCarousel /> </Route>
        <Route  path='/platillo'> <Platillos /></Route>
        <Route  path='/menu'> <MenuQr/> </Route>
        
      </Switch>
        <Footer />
        
        </BrowserRouter>
        
        
        </div>
    )
  }
}

export default App;
