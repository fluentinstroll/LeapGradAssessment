import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import Header from './Header.jsx';

const App = () => {
  const [calls, setCalls] = useState([]);
  //useEffect to grab the api data
  React.useEffect(() => {
    fetchData();
  }, []);

  //the actual function that calls the get api route
  const fetchData = () => {
    return fetch('https://aircall-job.herokuapp.com/activities')
      .then((response) => response.json())
      .then((data) => setCalls(data));
  };

  return (
    <div className="container">
      <Header />
      <div className="container-view">
        {calls.map((call) => (
          <div className="container-data">
            <div>
              <div>{call.to}</div>
              <div>tried a call on {call.from}</div>
            </div>

            <div className="call-time">{call.created_at}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));

export default App;
