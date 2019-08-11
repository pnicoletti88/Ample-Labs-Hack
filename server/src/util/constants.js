const actionTypes = {
  LOGIN: "login",
  FOOD: "food",
  SHELTER: "shelter",
  EMERGENCY: "emerg",
  DROPIN: "dropIn",
  CLOTHING: "clothing"
};

const actionSet = new Set();
Object.values(actionTypes).forEach(value => actionSet.add(value));

module.exports = {
  actionTypes,
  actionSet
};
