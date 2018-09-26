// @flow
import * as React from 'react';
import { Route } from 'react-router-dom';

// Route components
import Home from '../Home';
import Schedule from '../Schedule';
import View from '../View';

// UI Components
import Site from '../../components/Site';


class App extends React.Component {
  render() {
    return (
      <Site>
        <Site.Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/view" component={View} />
        <Route exact path="/schedule" component={Schedule} />
      </Site>
    );
  }
};

export default App;
