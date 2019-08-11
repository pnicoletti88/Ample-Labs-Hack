const LocationData = require("./Models/LocationData");
const { actionTypes } = require("./util/constants");

const data = [];

const initialLat = 43.70107;
const initialLong = -79.35702;

const actionTypesArr = Object.values(actionTypes);

for (let i = 0; i < 1000; i += 1) {
  let incrementLong = Math.random() / 13;
  let incrementLat = Math.random() / 13;
  if (Math.floor(Math.random() * 100) % 2 === 1) {
    incrementLong *= -1;
  }
  if (Math.floor(Math.random() * 100) % 2 === 1) {
    incrementLat *= -1;
  }
  const randAction = actionTypesArr[Math.floor(Math.random() * 6)];
  const dataSingle = new LocationData({
    action: randAction,
    location: {
      long: initialLong + incrementLong,
      lat: initialLat + incrementLat
    }
  });
  data.push(dataSingle);
}

(async () => {
  console.log("writing to db");
  console.log(data.length);
  const result = await LocationData.insertMany(data);
  console.log(result);
  console.log("done");
})();
