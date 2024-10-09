import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import DogList from './components/DogList';
import DogDetails from './components/DogDetails';
import Booking from './components/Booking';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [selectedDog, setSelectedDog] = useState(null);

  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route 
              exact 
              path="/dogs" 
              render={(props) => <DogList {...props} setSelectedDog={setSelectedDog} />} 
            />
            <Route 
              path="/dogs/:id" 
              render={(props) => <DogDetails {...props} selectedDog={selectedDog} />} 
            />
            <Route 
              path="/booking" 
              render={(props) => <Booking {...props} selectedDog={selectedDog} />} 
            />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;