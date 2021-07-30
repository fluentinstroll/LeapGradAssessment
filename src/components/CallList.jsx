import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CallPage from './CallPage.jsx';

const CallList = () => {
  //useState for the calls taken from the api
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
      <div className="container-view">
        {calls.map((call) => (
          <Link
            to={`/call/${call.id}`}
            style={{ textDecoration: 'none', color: 'black' }}
          >
            <div className="container-data">
              <div className="caller-info">
                    <p>{call.to ? call.to : 'Unknown Caller'}</p>
                

                <div className="call-tried">tried a call on</div>
                <div className="call-tried">{call.from}</div>
              </div>

              <div className="call-time" on>
                {call.created_at}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CallList;
