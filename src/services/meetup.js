'use strict';
const meetupApiKey = '483d762142794329631b6b4553351';

function makeRequest(url) {
  return fetch(`${url}&key=${meetupApiKey}`)
    .then(result => result.json())
}

export function meetupName() {
  return makeRequest(`https://api.meetup.com/Kiel-React-Native-Meetup?photo-host=public&fields=event_sample`)
      .then(result => result.name);
}
