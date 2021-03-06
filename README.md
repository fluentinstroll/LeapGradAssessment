# LeapGrad Assessment
This is an app built for an assessment by LeapGrad. Below you can find the instructions on what to do as well as screenshots of my own app.

This app was coded in about 6 hours over the course of 4 days.

This app has all functionality besides the ability to archive calls. However, if one were to manually set a call as archived, the app will not display the call.

## To Use
1. Clone this GitHub repository into your own folder
2. Run ``npm install`` and ``yarn install`` to install all the dependencies
3. Run ``npm start`` or ``yarn start`` to start the app on a local server

![leapgrad1](https://user-images.githubusercontent.com/32021785/127698677-4bfc31f8-6060-4e21-88c1-5e8373fa4e32.png)

![leapgrad2](https://user-images.githubusercontent.com/32021785/127698859-b200e772-394d-4d92-9521-49c315e898f7.png)

# Instructions

## Summary

The goal of this test is to make you code a small ReactJS app. We have prepared a skeleton app for you, but please change whatever you want (CSS files, HTML structure, JS structure...).

The app will have two different components:
- **Activity Feed** - simple list of calls
- **Activity Detail** - detail of a call

Show us what you can do in 6 hours top :) Focus on design, development - all aspects!

**Bonus:** the final user should be able to archive a call. The call will no longer be displayed on the Activity Feed. Please code that only if you have extra time.


To give you an idea, here what our app looks like:


![app](https://user-images.githubusercontent.com/630714/29357034-763d7216-8276-11e7-8bcb-e77d9645dfcc.png)

## Installation

We're using [yarn](https://yarnpkg.com) here:

```
yarn install
yarn start
```

## API documentation

### Routes

Here is the API address: https://aircall-job.herokuapp.com.

As you can see, it's hosted on a free Heroku server, which means that the first time you will fetch the API, it will take few seconds to answer.

- **GET** - https://aircall-job.herokuapp.com/activities: get calls to display in the Activity Feed
- **GET** - https://aircall-job.herokuapp.com/activities/:id: retrieve a specific call details
- **POST** - https://aircall-job.herokuapp.com/activities/:id: update a call. The only field updatable is `is_archived (bool)`. You'll need to send a JSON in the request body:
```
{
  is_archived: true
}
```
- **GET** - https://aircall-job.herokuapp.com/reset: Reset all calls to initial state (usefull if you archived all calls).

### Call object

- **id** - unique ID of call
- **created_at** - creation date
- **direction** - `inbound` or `outbound` call
- **from** - caller's number
- **to** - callee's number
- **via** - Aircall number used for the call
- **duration** - duration of a call (in seconds)
- **is_archived** - call is archived or not
- **call_type** - can be a `missed`, `answered` or `voicemail` call.


