import React from 'react';
import './App.css';
import AlbumFeature from './features/Song';
import TodoFeature from './features/Todo';
import { NavLink, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';

const App = () => {
   return (
      <div className="App">
         <NavLink className="btn-link" activeClassName="btn-link__active" to="/todos">
            Go Todo
         </NavLink>
         <NavLink className="btn-link" activeClassName="btn-link__active" to="/albums">
            Go Album
         </NavLink>
         <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/todos" component={TodoFeature} />
            <Route path="/albums" component={AlbumFeature} />
         </Switch>
      </div>
   );
};

export default App;
