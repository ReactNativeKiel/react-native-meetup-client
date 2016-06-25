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

export function allEvents() {
  return new Promise(function(resolve, reject) {
    makeRequest(`https://api.meetup.com/Kiel-React-Native-Meetup/events?photo-host=public&page=20&status=upcoming%2Cpast`)
      .then(result => {
        const rawMeetups = result.map(meetup => ({
          name: meetup.name,
          rsvpLimit: meetup.rsvp_limit,
          rsvps: meetup.yes_rsvp_count,
          time: meetup.time,
          venueName: (meetup.venue || {}).name,
        }));

        Promise.all(result.map(res => 
          makeRequest(`https://api.meetup.com/Kiel-React-Native-Meetup/events/${res.id}/photos?photo-host=public&page=20`)
        )).then(results => {
          const meetupsWithPhotos = results.map((result, index) => ({
            ...rawMeetups[index],
            photos: result.map(r => r.photo_link),
          }));

          const meetupsWithPhotosAndTitleImage = results.map((result, index) => ({
            ...meetupsWithPhotos[index],
            photo: result.length ? result[0].photo_link : 'http://placekitten.com/800/800',
          }));

          resolve(meetupsWithPhotosAndTitleImage);
        });  
      });
  });
}

