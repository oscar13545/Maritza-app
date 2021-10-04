import React,{ Component } from 'react';
import './App.css';
import Nvbar from './Components/Nvbar/Nvbar';
import NvCarousel from './Components/NvCarousel/NvCarousel';
import Platillos from './Components/Platillos/Platillos';
import MenuQr from './Components/MenuQr/MenuQr';
import { Route, Switch } from 'react-router-dom';

class App extends Component{
  
  render () {
    return (
      <div className="App">
        
        <Nvbar />
      <Switch>
        <Route exact path='/' component={NvCarousel} />
        <Route exact path='/home' component={NvCarousel} />
        <Route path='/platillo' component={Platillos} />
        <Route path='/menu' component={MenuQr} />  
        
      </Switch>        
        </div>
    )
  }
}

export default App;
