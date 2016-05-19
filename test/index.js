import { CountryRegions, CountryDropdown, RegionDropdown} from "../dist/react-crs";
import React from 'react';
import ReactDOM from 'react-dom';

const App = React.createClass({
  render () {
    return (
      <div>
        !!!
        <CountryRegions />
      </div>
    );
  }
});

const appRoot = document.createElement('div');
document.body.appendChild(appRoot);
ReactDOM.render(<App />, appRoot);
