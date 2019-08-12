import moment from "moment";
import clothing from "./Assets/clothing.svg";
import dropIn from "./Assets/dropIn.svg";
import emergency from "./Assets/emergency.svg";
import freeMeal from "./Assets/freeMeal.svg";
import shelter from "./Assets/shelter.svg";

// no billing attached to key - for dev purposes only
const googleMaps = { key: "AIzaSyAEWRdFiazkHE7FPHTNKXhXb1POsr9hZ7Y" };

const actionTypes = {
  LOGIN: "login",
  FOOD: "food",
  SHELTER: "shelter",
  EMERGENCY: "emerg",
  DROPIN: "dropIn",
  CLOTHING: "clothing"
};

const pastDate = new Date();
pastDate.setDate(pastDate.getDate() - 30);

const initialDateRange = {
  startDate: moment().subtract(30, "days"),
  endDate: moment()
};
const initialAction = actionTypes.LOGIN;

const dropDownData = [
  {
    value: actionTypes.LOGIN,
    label: "Login",
    imageSrc: shelter
  },
  {
    value: actionTypes.FOOD,
    label: "Free Meal",
    imageSrc: freeMeal
  },
  {
    value: actionTypes.SHELTER,
    label: "Shelter",
    imageSrc: shelter
  },
  {
    value: actionTypes.EMERGENCY,
    label: "Emergency",
    imageSrc: emergency
  },
  {
    value: actionTypes.DROPIN,
    label: "Drop In",
    imageSrc: dropIn
  },
  {
    value: actionTypes.CLOTHING,
    label: "Clothing",
    imageSrc: clothing
  }
];

export { googleMaps, initialDateRange, initialAction, dropDownData };
