import React, {Component} from 'react';
import './App.css';
import 'primereact/resources/themes/md-light-indigo/theme.css';  
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import Accueil from './components/accueil';


class App extends Component {
  constructor(){
    super();
    this.state={
      page:0
    };
  }
  render(){
    return(
      <div className="App">
        <Accueil/>
      </div>
    );
  }
  
}

export default App;
