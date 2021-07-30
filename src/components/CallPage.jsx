import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
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
//TODO: Make this work properly, right now we get error 400
  const archiveCall = (id) => {
    return fetch('https://aircall-job.herokuapp.com/activities/' + id, {
      mode: "no-cors",
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: {is_archived: true},
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="container">
      <div className="container-view">
        <div className="container-call-data">
        <h4>
          {call.call_type} Call From: {call.from}
        </h4>
        <p>Call To: {call.to}</p>
        <p>Called From {call.via}</p>
        <p>Call Duration: {call.duration} seconds</p>
        {call.is_archived == false && (
          <button style={{ 'margin-right': '20px' }}onClick={() => archiveCall(call.id)}>Archive</button>
        )}
        <Link to="/">
          <button>Back</button>
        </Link>
        </div>
      </div>
        
    </div>
  );
};

export default CallPage;
