import React, {useState} from 'react';
import ReactDOM from 'react-dom';

import Header from './Header.jsx';

const App = () => {

  const [calls = [], setCalls] = useState({});
  //useEffect to grab the api data
  React.useEffect(() => {
    fetchData();
  }, []);

  //the actual function that calls the get api route
  const fetchData = () => {
    return fetch('https://aircall-job.herokuapp.com/activities')
      .then((response) => {response.json(); console.log(response)})
      .then((data) => console.log(data));
  };

  return (
    <div className="container">
      <Header />
      <div className="container-view">
        <div className="container-data">
          <div>
            <div>calls.from</div>
            <div>tried a call on calls.to</div>
          </div>

          <div className="call-time">calls.created_at</div>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));

export default App;
