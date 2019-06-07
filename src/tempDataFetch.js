/*
    - Casa Loma
    - Queen's Park
    - Union Station
    - Riverdale Park East
    - RBC WaterPark Place
*/
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
// import * as firebase from "firebase/app";
const firebase = require('firebase/app');
require('firebase/auth');
require('firebase/database');
// Add the Firebase services that you want to use
// import "firebase/auth";
// import "firebase/firestore";


// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC9xICK5N6g5YQP2P8zV1BqOBv7MpvpUbk',
  authDomain: 'chalmers-hackday.firebaseapp.com',
  databaseURL: 'https://chalmers-hackday.firebaseio.com',
  projectId: 'chalmers-hackday',
  storageBucket: 'chalmers-hackday.appspot.com',
  messagingSenderId: '30284571686',
  appId: '1:30284571686:web:eaa7f4c20ef77cfa',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const milliToDays = function (milli) {
  return milli / 86400000;
};

async function locationData(daysBack) {
  return firebase.database().ref('locations').once('value').then((snapshot) => {
    // console.log(snapshot.toJSON());
    const dataObj = snapshot.toJSON();
    const dataArr = [];
    for (const key in dataObj) {
      dataArr.push(dataObj[key]);
    }
    dataArr.sort((a, b) => {
      if (a.timestamp < b.timestamp) {
        return -1;
      }
      if (a.timestamp > b.timestamp) {
        return 1;
      }
      return 0;
    });
    const now = (new Date()).getTime();
    return dataArr.filter((elem, _) => {
      const then = elem.timestamp;
      const timeDiff = now - then;
      console.log(timeDiff);
      console.log(`timediff: ${milliToDays(timeDiff)}`);
      return (parseInt(milliToDays(timeDiff)) <= parseInt(daysBack));
    });
  });
}


// locationData();
// console.log(filterData([{"timestamp": 1233333}, {"timestamp": 1559936020732}], 3));


// const locationData = async () => [
//   { lat: 43.677331, long: -79.409862 },
//   { lat: 43.663351, long: -79.392062 },
//   { lat: 43.643306, long: -79.389535 },
//   { lat: 43.670123, long: -79.355851 },
//   { lat: 43.6405633, long: -79.3792623 },
//   { lat: 43.6405633, long: -79.3792623 },
//   { lat: 43.6405633, long: -79.3792623 },
//   { lat: 43.6405633, long: -79.3792623 },
//   { lat: 43.6405633, long: -79.3792623 },
//   { lat: 43.6405633, long: -79.3792623 },
//   { lat: 43.6405633, long: -79.3792623 },
//   { lat: 43.6405633, long: -79.3792623 },
// ];
export { locationData };
