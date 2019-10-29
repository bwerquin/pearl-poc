import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import CollectOrchestrator from 'components/orchestrator';
import Sync from 'components/sync';
import Sound from 'components/sound';
import Autocomplete from 'components/autocomplete';
import Home from 'components/home';
import logo from 'img/pearl-logo.png';

export default () => {
  const footer = `Poc Pearl - PWA`;
  return (
    <>
      <div className="lunatic-img-container">
          <img
            className="lunatic-img"
            alt="lunatic"
            src={logo}
          />
      </div>
      <div className="container">
        <Router>
          <div className="menu">
            <ul>
                <li><Link to="/">Tournée</Link></li>
                <li><Link to="/autocomplete">Recherche COG</Link></li>
                <li><Link to="/sound">Fichiers sons</Link></li>
                <li><Link to="/sync">Synchronisation</Link></li>
            </ul>
          </div>
          <div className="content">
            <Switch>
              <Route exact path="/questionnaire/simpsons" component={CollectOrchestrator} />
              <Route exact path="/autocomplete" component={Autocomplete} />
              <Route exact path="/sound" component={Sound} />
              <Route exact path="/sync" component={Sync} />
              <Route path="/" component={Home} />
            </Switch>
          </div>
        </Router>
      </div>
      <div className="footer">
          <label id="footer">{footer}</label>
        </div>
    </>
  );
};
