import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CallPage from './CallPage.jsx';

const CallList = () => {
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
          <div className="container-data">
            <div>
              
              <p>
                <Link to={`/call/${call.id}`}>{call.to}</Link>
              </p>
              <div>tried a call on {call.from}</div>
            </div>

            <div className="call-time">{call.created_at}</div>
          </div>
        ))}
      </div>
    </div>
    );
};

export default CallList;