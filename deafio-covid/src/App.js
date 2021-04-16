import './App.css';
import Home from './Components/Home/home';
import Pais from './Components/Pais/Pais';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
  
      <div className="conteiner-fluid">
          <div className="row">
            <div className="col">
              <Switch>
                <Route path="/home" component={Home} />
                <Route path="/pais" component={Pais} />
                <Route path="/" exact component={Home} />
              </Switch>
            </div>
          </div>
        </div>
  
    </div>
  );
}

export default App;
