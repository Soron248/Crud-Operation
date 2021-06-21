import React from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import { UserProvider } from './components/NewContext';
import Home from './pages/Home';
import View from './pages/View';
import Edit from './pages/Edit';
import CreateUser from './pages/CreateUser';

function App() {
  return (
    <div className="App">
        <UserProvider>
        <Router>
          <Switch>
            <Route exact path="/"><Home/></Route>
            <Route path="/createUser"><CreateUser/></Route>
            <Route path="/view/:Uid"><View/></Route>
            <Route path="/edit/:Uid"><Edit/></Route>
            <Route path="/:Uid"><Home/></Route>
          </Switch>
        </Router>
        </UserProvider>
    </div>
  );
}

export default App;
