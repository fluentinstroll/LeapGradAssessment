import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import App from '../App.jsx';
import Header from '../Header.jsx';

const CallPage = () => {
  const [call, setCall] = useState([]);
  //useEffect to grab the api data
  React.useEffect(() => {
    const id = getCallId();
    getCall(id);
  }, []);

  const getCallId = () => {
    const url = window.location.pathname.toString();
    const urlArray = url.split('/');
    return urlArray[2];
  };

  const getCall = (id) => {
    return fetch('https://aircall-job.herokuapp.com/activities/' + id)
      .then((response) => response.json())
      .then((data) => setCall(data));
  };

  return (
      <div>
      <div className="container-view">
          <p>{call.from} ({call.id})</p>
          <p>{call.to}</p>
          <p>{call.call_type}</p>
          <p>{call.via}</p>
          {call.is_archived == false && <button>Archive</button>}
          
      </div>
      <Router forceRefresh={true}>
          <Route exact path="/" component={App}/>
          <Link to="/"> <p>Back</p> </Link>
      </Router>
      </div>
  );
};

export default CallPage;
