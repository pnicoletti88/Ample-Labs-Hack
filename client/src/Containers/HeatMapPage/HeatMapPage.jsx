import React, { useState, useEffect } from "react";
import HeatMap from "../../Components/HeatMap/HeatMap";
import { initialDateRange } from "../../constants";

const HeatMapPage = () => {
  const [dateRange, setDateRange] = useState(initialDateRange);
  const [isDataLoading, setIsDataLoading] = useState(true);
  const [data, setData] = useState([]);

  return (
    <div style={{ width: "500px", height: "500px" }}>
      <HeatMap />
    </div>
  );
};

export default HeatMapPage;
