import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./Containers/App/App";
// import HeatMapPage from "./Containers/HeatMapPage/HeatMapPage";
import RangeCalendar from "./Components/RangeCalendar/RangeCalendar";
import HeatMap from "./Components/HeatMap/HeatMap";
import HeatMapSettings from "./Components/HeatMapSettings/HeatMapSettings";
import Loading from "./Components/Loading/Loading";
import * as serviceWorker from "./serviceWorker";
import "./index.css";


ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
