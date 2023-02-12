import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import './assets/scss/global.scss';

import { AppHeader } from './cmps/AppHeader';
import { AppFooter } from './cmps/AppFooter';
import { ContactMe } from './cmps/ContactMe';

import {Home} from './views/Home';
import {Dashboards} from './views/Dashboards'
import {MySolution} from './views/MySolution'


import {NotificationContainer, NotificationManager} from 'react-notifications';

function App() {
  return (
    <Router>
      <div className="App">
        <AppHeader className="App-header"></AppHeader>
        <main>
          <Switch>
            <Route path="/solution" component={MySolution} />
            <Route path="/dashboards" component={Dashboards} />
            <Route path="/" component={Home} />
          </Switch>
        </main>
        <ContactMe />
        <AppFooter />
      </div>
    </Router>
  );
}

export default App;
